import nodemailer from "nodemailer";

export async function handler(event) {
  const transporter = nodemailer.createTransport({
    host: "otakutv.co",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const { senderName, senderEmail, subject, message } = JSON.parse(
    event.body
  );

  const content = `name: ${senderName} \n email: ${senderEmail} \n message: ${message}`

  const mailOptions = {
    from: senderName,
    to: "support@otakutv.co",
    subject: `Contact Us Form - ${subject}`,
    text: content
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
