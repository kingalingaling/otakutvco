import nodemailer from 'nodemailer'
import * as fs from 'fs'

export async function handler (event) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const { fname, tickets, day, time, locay, total_order, recipient } = JSON.parse(
    event.body
  );

  const htmlBody = `
  <html>
  <head>
    <style>
      @media only screen and (max-width: 600px) {
        .main {
          width: 320px !important;
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
                    src="cid:logoImg"
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
                        Hello ${fname},
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
                          src="cid:bannerImg"
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
                        <b>Total Cost: ${total_order}</b><br /><br />
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
                </table>
              </td>
            </tr>

            <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5">
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
                        © 2023 | OtakuTv | <a href="https://www.otakutv.co">www.otakutv.co</a> <br>
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

  const mailOptions = {
    from: "otakuconnect@otakutv.co",
    to: recipient,
    subject: "Your Tickets Have Arrived!!",
    html: htmlBody,
    attachments: [
      {
        filename: "logo.png",
        path: fs.readFileSync('logo.png'),
        cid: "logoImg",
      },
      {
        filename: "email-banner.jpg",
        path: fs.readFileSync('email-banner.jpg'),
        cid: "bannerImg",
      },
    ],
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info)
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