import nodemailer from "nodemailer";

export async function handler(event) {
  const transporter = nodemailer.createTransport({
    host: "server322.web-hosting.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER_BOOKING,
      pass: process.env.EMAIL_PASSWORD_BOOKING,
    },
  });

  const { first_name, email, pickup, cost, pickupTime, quantity } = JSON.parse(
    event.body
  );
  
  console.log(first_name, email, pickup, cost, pickupTime, quantity)

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
    from: "Booking Confirmation <connect@otakutv.co>",
    to: email,
    subject: "Ready to Ride with Otaku?",
    html: htmlBody
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
    };
  }
}
