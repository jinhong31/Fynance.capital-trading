/**
 * Email Service
 */
// const sgMail = require('@sendgrid/mail');
// const SENDGRID_API_KEY = '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'
// const EMAIL_SENDER = 'admin@em2232.deskhunters.com'

// sgMail.setApiKey(SENDGRID_API_KEY);
// const sendEmail = async msg => {
//   msg.from = EMAIL_SENDER;
//   const response = await sgMail.send(msg);
//   console.log("response", response);
//   if (response[0].statusCode == 200 || response[0].statusCode == 202)
//     return 'Success';
//   return 'Failure';
// }

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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');
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = {
  sendEmail
}