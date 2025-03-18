
const nodemailer = require("nodemailer");
function sendMail(email,Link){
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  service:"gmail",
  auth: {
    user: "Nitesh8174@gmail.com",
    pass: "APP Password",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'yours mail id', // sender address
    to:email, // list of receivers
    subject: "Verify Email", // Subject line
    text: "Please click on the link to verify your email", // plain text body
    html: `<a href=${Link}>Click</a>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

}

module.exports.sendMail=sendMail;