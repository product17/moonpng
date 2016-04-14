'use strict';

const twilio = require('twilio');
const auth = 'a686aee47dff216c541e6ecc68ec29ee';
const sid = 'AC9e7d38ed7c5c4c4d28d6d5bf21729c64';

// const client = twilio(sid, auth);
//
// // Send an SMS text message
// client.sendMessage({
//   to: '+13602694628', // Any number Twilio can deliver to
//   from: '+14253850200', // A number you bought from Twilio and can use for outbound communication
//   body: 'word to your mother. wat', // body of the SMS message
// }, (err, responseData) => {
//   if (!err) {
//     console.log(responseData.from); // outputs "+14506667788"
//     console.log(responseData.body); // outputs "word to your mother."
//   }
// });


exports.onMessage = (req, res) => {
  console.log(req.body);
  res.end();
}
