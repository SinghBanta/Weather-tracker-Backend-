require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ALERT_EMAIL,
    pass: process.env.ALERT_PASSWORD
  }
});

var mailOptions = {
  from:'Banta Singh',
  to: process.env.ALERT_EMAIL,
  subject: 'Sending Email using Node.js',
  text: 'Hello, this is a test email sent using Node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});