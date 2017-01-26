var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "gmail.user@gmail.com",
       pass: "gmailpass"
   }
});
