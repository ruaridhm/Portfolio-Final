const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', //replace with your email provider
  port: 587,
  auth: {
    user: 'ruaridh.mcguckin@gmail.com',
    pass: 'Mong0ose',
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  var mail = {
    from: name,
    to: 'ruaridh.mcguckin@gmail.com',
    text: content,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});
