import nodemailer from "nodemailer";
import QRCode from "qrcode";
import html2pdf from "html2pdf.js";

const generatePDF = async (fName, lName, qr) => {
  const htmlContent = `
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Otaku Connect Tickets</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              text-align: center;
              background-color: rgb(248, 198, 198);
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .ticket {
              width: 600px;
              margin: auto;
              border: 1px solid red;
              padding: 20px;
              background-color: #f9f9f9;
          }
          img.qr-code {
              max-width: 100%;
          }
          h1 {
              font-size: 1.5em;
          }
      </style>
  </head>
  <body>
      <div class="ticket">
          <h1>Otaku Connect 2023 Tickets</h1>
          <p>Name: ${fName+" "+lName}</p>
          <img class="qr-code" src=${qr} alt="QR Code">
      </div>
  </body>
  </html>
  `;

  return new Promise((resolve, reject) => {
    html2pdf(htmlContent, (pdfBuffer) => {
      if (pdfBuffer) {
        resolve(pdfBuffer);
      } else {
        reject(new Error("Failed to generate PDF"));
      }
    });
  });
};

const generateQRCode = async (data) => {
  try {
    const qrCodeImage = await QRCode.toDataURL(data);
    return qrCodeImage;
  } catch (error) {
    console.error("Error generating QR code:", error);
    return null;
  }
};

export async function handler(event) {
  const transporter = nodemailer.createTransport({
    host: "otakutv.co",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const { id, first_name, last_name, email, tickets, cost, day, time, locay } = JSON.parse(
    event.body
  );

  const qrCodeImg = await generateQRCode(
    `https://netlify--otakutvco.netlify.app/otakuconnect/confirmation?ticket_id=${id}`
  );
  const base64Image = qrCodeImg.split(",")[1];

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
                        <strong>Time</strong>: ${time}<br /><br />
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
                          href="mailto:otakutvng@gmail.com"
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

  try {
    const pdfBuffer = await generatePDF(first_name, last_name, base64Image)
    const mailOptions = {
      from: "otakuconnect@otakutv.co",
      to: email,
      subject: "Your Tickets Have Arrived!!",
      html: htmlBody,
      attachments: [{
        filename: 'event_ticket.pdf',
        content: pdfBuffer
      }]
    }
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
