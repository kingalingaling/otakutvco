import crypto from 'crypto'
import * as admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';
import { config } from 'dotenv';

config();


const secret = process.env.VITE_PAYSTACK_API

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);
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

const generateQRCode = async (data) => {
  try {
    const qrCodeImage = await QRCode.toDataURL(data);
    return qrCodeImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}

// Webhook handler
export async function handler(event) {
  try {
    const eventData = JSON.parse(event.body);
    const signature = event.headers['x-paystack-signature'];
    console.log(`${eventData.event} , ${eventData.data}`)

    // Validate the Paystack event
    if (!eventData.event || !eventData.data || !eventData.data.id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'Invalid Paystack event data' }),
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
  const ticketDocRefAbj = db.collection('abuja-tickets').doc(reference);
  const ticketDocSnapshotAbj = await ticketDocRefAbj.get();
  if (ticketDocSnapshotAbj.exists) {
    await ticketDocRefAbj.update({ status: 'confirmed' });
    const id = ticketDocSnapshotAbj.id
    const first_name = ticketDocSnapshotAbj.get('first_name')
    const email = ticketDocSnapshotAbj.get('email')
    const tickets = ticketDocSnapshotAbj.get('tickets')
    const cost = ticketDocSnapshotAbj.get('cost')
    const day = "December 30th, 2023"
    const locay = "La Vida Local Spar Road, behind NNPC Petrol station Life Camp, Abuja, Federal Capital Territory"
    console.log(id, first_name, email, tickets, cost, day, locay)

    // Send email to the customer
    await sendEmail(id, email, first_name, tickets, cost, day, locay);
  } else {
    const ticketDocRefLag = db.collection('lagos-tickets').doc(reference);
    // const ticketDocSnapshotLag = await getDoc(ticketDocRefLag);
    const ticketDocSnapshotLag = await ticketDocRefLag.get()
    await ticketDocRefLag.update({ status: 'confirmed' });
    const id = ticketDocSnapshotLag.id
    const first_name = ticketDocSnapshotLag.get('first_name')
    const email = ticketDocSnapshotLag.get('email')
    const tickets = ticketDocSnapshotLag.get('tickets')
    const cost = ticketDocSnapshotLag.get('cost')
    const day = "December 23rd, 2023"
    const locay = "Rango Rooftop Lounge, 26 Prince Adelowo Adedeji Street, Lekki Phase 1 - 106104, Lagos"
    console.log(id, first_name, email, tickets, cost, day, locay)

    // Send email to the customer
    await sendEmail(id, email, first_name, tickets, cost, day, locay);
  }

}

// Function to send email using nodemailer
async function sendEmail(id, email, first_name, tickets, cost, day, locay) {
  // Generate QR
  const qrCodeImg = await generateQRCode(`https://otakutv.co/otakuconnect/confirmation?ticket_id=${id}`)
  const base64Image = qrCodeImg.split(',')[1];

  const htmlBody = `
  <html>
  <head>
    <style>
      @media only screen and (max-width: 600px) {
        .main {
          width: 320px !important;
        }

        .qrcode {
          padding: 16px;
        }
        .qrcode img {
          margin: 0 auto;
          width: 100%;
          height: auto;
        }

        .top-image {
          width: 100% !important;
        }
        .inside-footer {
          width: 320px !important;
        }
        table[class="contenttable"] {
          width: 320px !important;
          text-align: left !important;
        }
        td[class="force-col"] {
          display: block !important;
        }
        td[class="rm-col"] {
          display: none !important;
        }
        .mt {
          margin-top: 15px !important;
        }
        *[class].width300 {
          width: 255px !important;
        }
        *[class].block {
          display: block !important;
        }
        *[class].blockcol {
          display: none !important;
        }
        .emailButton {
          width: 100% !important;
        }

        .emailButton a {
          display: block !important;
          font-size: 18px !important;
        }
      }
    </style>
  </head>
  <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
    <table
      class="main contenttable"
      align="center"
      style="
        font-weight: normal;
        border-collapse: collapse;
        border: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
        font-family: Arial, sans-serif;
        color: #555559;
        background-color: white;
        font-size: 16px;
        line-height: 26px;
        width: 600px;
      "
    >
      <tr>
        <td
          class="border"
          style="
            border-collapse: collapse;
            border: 1px solid #eeeff0;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            color: #555559;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 26px;
          "
        >
          <table
            style="
              font-weight: normal;
              border-collapse: collapse;
              border: 0;
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            "
          >
            <tr>
              <td
                colspan="4"
                valign="top"
                class="image-section"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 26px;
                  background-color: #fff;
                  border-bottom: 4px solid #00a5b5;
                "
              >
                <a href="https://www.otakutv.co"
                  ><img
                    class="top-image"
                    src="https://github.com/kingalingaling/otakutvco/blob/332c6cdfe132df117f037933d3c4cc5ef79f939c/client/public/assets/logo.png?raw=true"
                    style="line-height: 1; width: 100px"
                    alt="Otaku Connect 2023"
                /></a>
              </td>
            </tr>
            <tr>
              <td
                valign="top"
                class="side title"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 20px;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 26px;
                  vertical-align: top;
                  background-color: white;
                  border-top: none;
                "
              >
                <table
                  style="
                    font-weight: normal;
                    border-collapse: collapse;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                  "
                >
                  <tr>
                    <td
                      class="head-title"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 28px;
                        line-height: 34px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <div class="mktEditable" id="main_title">
                        You&apos;ve Got TIckets to Otaku Connect 2023!!
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="sub-title"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        padding-top: 5px;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 18px;
                        line-height: 29px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <div class="mktEditable" id="intro_title">
                        Hello ${first_name}, <br />
                        Your tickets are here
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="top-padding"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 5px;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                      "
                    ></td>
                  </tr>
                  <tr>
                    <td
                      class="grey-block"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                        background-color: #fff;
                        text-align: center;
                      "
                    >
                      <div class="mktEditable" id="cta">
                        <img
                          class="top-image"
                          src="https://github.com/kingalingaling/otakutvco/blob/332c6cdfe132df117f037933d3c4cc5ef79f939c/client/public/assets/email-banner.jpg?raw=true"
                          width="560"
                        /><br /><br />
                        <strong>Location:</strong>${locay}<br />
                        <strong>Date:</strong>${day}<br />
                        <strong>Time</strong>: 12PM<br /><br />
                        <strong>Movie starts at 10</strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="top-padding"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 15px 0;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 21px;
                      "
                    >
                      <hr size="1" color="#eeeff0" />
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="text"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                      "
                    >
                      <div class="mktEditable" id="main_text">
                        <b>Ticket Details:</b><br /><br />
                        ${tickets} <br />
                        <br />
                        <b>Total Cost: ${cost}</b><br /><br />
                        Can't Wait to see you!
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 24px;
                      "
                    >
                      &nbsp;<br />
                    </td>
                  </tr>
                  <tr style="width:100%;">
                    <td
                      class="text"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                      "
                    >
                      <p style="text-align: center; font-size: 1.5em; margin-bottom: 10px; font-weight: bolder;">Scan QR Code to View Tickets</p>
                    </td>
                  </tr>
                  <tr style="width: 100%;">
                    <td
                      class="text"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        width: 100%;
                        padding: 0;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                      "
                    >
                      <div id="qrcode-container" style="width: 100%; display: flex; justify-content: center;">
                        <div id="qrcode" class="qrcode" style="margin: 0px auto; display: flex; justify-content: center;">
                          <img src="cid:qr_code" alt='QR-Code'/>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr bgcolor="#fff" style="border-top: 4px solid #df1e1e">
              <td
                valign="top"
                class="footer"
                style="
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: none;
                  color: #555559;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 26px;
                  background: #fff;
                  text-align: center;
                "
              >
                <table
                  style="
                    font-weight: normal;
                    border-collapse: collapse;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                  "
                >
                  <tr>
                    <td
                      class="inside-footer"
                      align="center"
                      valign="middle"
                      style="
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 20px;
                        -webkit-text-size-adjust: none;
                        color: #555559;
                        font-family: Arial, sans-serif;
                        font-size: 12px;
                        line-height: 16px;
                        vertical-align: middle;
                        text-align: center;
                        width: 580px;
                      "
                    >
                      <div id="address" class="mktEditable">
                        © 2023 | OtakuTv |
                        <a href="https://www.otakutv.co">www.otakutv.co</a>
                        <br />
                        <br />
                        <a
                          style="color: #00a5b5"
                          href="mailto:support@otakutv.co"
                          >Contact Us</a
                        >
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;

  const mailOptions = {
    from: "Otaku Connect 2023 <otakuconnect@otakutv.co>",
    to: email,
    subject: "Your Tickets Have Arrived!!",
    html: htmlBody,
    attachments: [
      {
        filename: 'qr_code.png',
        encoding: 'base64',
        content: base64Image,
        cid: 'qr_code'
      }
    ]
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.error(error)
  }
}