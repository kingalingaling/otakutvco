import crypto from 'crypto'
import * as admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();


const secret = process.env.PAYSTACK_SECRET_KEY

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.VITE_FIREBASE_SERVICE_KEY);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore reference
const db = admin.firestore();

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: "server322.web-hosting.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function verify(eventData, signature) {
  const hmac = crypto.createHmac('sha512', secret);
  const expectedSignature = hmac.update(JSON.stringify(eventData)).digest('hex');
  return expectedSignature === signature;
}

// Webhook handler
export async function handler(event) {
  try {
    const eventData = JSON.parse(event.body);
    const signature = event.headers['x-paystack-signature'];
    console.log(event)
    console.log(`${eventData.event} , ${eventData.data}`)

    // Validate the Paystack event
    if (!eventData.event || !eventData.data || !eventData.data.id) {
      console.log('Empty params')
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'Invalid Paystack event data' }),
      };
    }

    if (!verify(eventData, signature)) {
      console.log('Wrong key')
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'Event data signature not verified' }),
      };
    }

    if (eventData.event === 'charge.success' || eventData.event === 'transfer.success') {
      const transactionId = eventData.data.id;
      // Process the successful transaction to maybe fund wallet and update your WalletModel
      await handleSuccessEvent(eventData.data);
      console.log(`Transaction ${transactionId} was successful`);
    } else {
      console.log('Unhandled Paystack event:', eventData.event);
    }

    // Respond with a 200 status to acknowledge receipt of the event
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error handling Paystack webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
    };
  }
}

// Function to handle successful charge events
async function handleSuccessEvent(data) {
  // Extract necessary information from the Paystack event data
  const { reference } = data;

  // Update Firestore database (you might want to add more data or conditions)
  const ticketDocRef = db.collection('lagos-shuttlers').doc(reference);
  const ticketDocSnapshot = await ticketDocRef.get();
  if (ticketDocSnapshot.exists) {
    await ticketDocRef.update({ status: 'confirmed' });
    const id = ticketDocSnapshot.id
    const first_name = ticketDocSnapshot.get('first_name')
    const email = ticketDocSnapshot.get('email')
    const pickup = ticketDocSnapshot.get('pickup')
    const cost = ticketDocSnapshot.get('cost')
    const quantity = ticketDocSnapshot.get('quantity')
    const pickupTime = "December 30th, 2023"
    console.log(id, first_name, email, cost, pickup, quantity, pickupTime)

    // Send email to the customer
    await sendEmail(email, first_name, pickup, quantity, cost, pickupTime);
  } else {
    console.error("Document does not exist")
  }

}

// Function to send email using nodemailer
async function sendEmail(email, first_name, pickup, quantity, cost, pickupTime) { 
  const htmlBody = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ride Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            padding: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .content {
            padding: 20px;
            background-color: #fff;
        }

        .footer {
            text-align: center;
            padding: 20px 0;
            background-color: #333;
            color: #fff;
        }

        .header-container {
            display:flex;
            justify-content:center;
            align-items:center;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr class="header-container">
                <td class="header">
                    <img src="https://otakutv.co/assets/oc-logo.png" alt="Otaku Connect Logo" style="max-width: 150px; margin-right: 20px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="https://otakutv.co/assets/shuttlers-logo.webp" alt="Logo 2" style="max-width: 100px; border-radius: 100%; margin-left: 20px;">
                </td>
            </tr>
            <tr>
                <td class="content">
                    <h2>Booking Confirmation</h2>
                    <p>Hello ${first_name},</p>

                    <p>Your ride has been booked successfully. Here are the details:</p>

                    <table width="100%" cellspacing="0" cellpadding="5">
                        <tr>
                            <td><strong>Pickup Point:</strong></td>
                            <td>${pickup}</td>
                        </tr>
                        <tr>
                            <td><strong>Cost:</strong></td>
                            <td>${cost}</td>
                        </tr>
                        <tr>
                            <td><strong>Pickup Time:</strong></td>
                            <td>${pickupTime}</td>
                        </tr>
                        <tr>
                            <td><strong>Quantity of Tickets:</strong></td>
                            <td>${quantity}</td>
                        </tr>
                    </table>

                    <p>Thank you for choosing to ride with us. Can't wait to see you at the event</p>

                    <p>Best regards,<br>Otaku Connect X Shuttlers Team</p>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <p>Contact us at <a style="text-decoration: none; color: rgb(251, 114, 114);" href="mailto:support@otakutv.co">support@otakutv.co</a></p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
  `;

  const mailOptions = {
    from: "Ride Booking Confirmation <otakuconnect@otakutv.co>",
    to: email,
    subject: "Get Ready to Ride with Otaku",
    html: htmlBody,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.error(error)
  }
}