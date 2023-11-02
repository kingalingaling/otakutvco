import nodemailer from "nodemailer";

export async function handler(event) {
  const transporter = nodemailer.createTransport({
    host: "otakutv.co",
    port: 465,
    auth: {
      user: process.env.SUPPORT_EMAIL_USER,
      pass: process.env.SUPPORT_EMAIL_PASSWORD,
    },
    from: process.env.SUPPORT_EMAIL_USER,
  });

  const { senderName, senderEmail, subject, message } = JSON.parse(event.body);

  const content = `name: ${senderName} \n email: ${senderEmail} \n message: ${message}`;

  const mailOptions = {
    from: `${senderName} <${process.env.SUPPORT_EMAIL_USER}>`,
    to: process.env.SUPPORT_EMAIL_USER,
    subject: `Contact Us Form - ${subject}`,
    text: content,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info);
    transporter.sendMail(
      {
        from: `OtakuTv Support <${process.env.SUPPORT_EMAIL_USER}>`,
        to: senderEmail,
        subject: "We Received Your Message",
        text: `Hi ${senderName},\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\nOtakuTv Support Team\n\n\nMessage Details\nName: ${senderName}\n Email: ${senderEmail}\n Message: ${message}`,
        html: `<p>Hi ${senderName},<br>Thank you for contacting us. We will get back to you soon.<br><br>Best Regards,<br>OtakuTv Support Team<br><br><br>Message Details<br>Name: ${senderName}<br> Email: ${senderEmail}<br> Message: ${message}</p>`,
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Message sent: " + info.response);
        }
      }
    );
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
