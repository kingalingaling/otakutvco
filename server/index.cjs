const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
const PORT = 3001;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post('/send-email', (req, res) => {
  const { recipient, html } = req.body;

  const mailOptions = {
    from: 'kingeshiebor@gmail.com',
    to: recipient,
    subject: 'Your Tickets Have Arrived!!',
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../client/build/index.html")
//   );
// });

// app.get('/send-email', (req, res) => {
//   const mailOptions = {
//     from: 'kingeshiebor@gmail.com',
//     to: 'jokomega12@gmail.com',
//     subject: 'Your Tickets Have Arrived!!',
//     html: '<html>Hello World</html>'
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});