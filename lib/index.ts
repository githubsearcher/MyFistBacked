// var QrCode = require('qrcode-reader');
// var Jimp = require("jimp");
// var fs = require('fs');

// export class QrcodeReader {
// private constructor() {

// }
// var buffer = fs.readFileSync(__dirname + './images/105.png');
// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//         // TODO handle error
//     }
//     var qr = new QrCode();
//     qr.callback = function(err, value) {
//         if (err) {
//             console.error(err);
//             // TODO handle error
//         }
//         console.log(value.result);
//         console.log(value);
//     };
//     qr.decode(image.bitmap);
// });
// }