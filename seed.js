const db = require('./database/index.js').db
const Photos = require('./database/index.js').Photos


let seeds = [
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey1.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey2.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey3.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey4.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey5.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey6.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey7.webp'},
  {product: 'FRIHETEN', color: 'Hyllie dark gray', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey8.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack1.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack2.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack3.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack4.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack5.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack6.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack7.webp'},
  {product: 'FRIHETEN', color: 'Bomstad Black', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack8.webp'}
];

for(var i = 0; i <= 8; i++) {
  seeds.forEach((seed) => {
    let pic = new Photos({product: seed.product, color: seed.color, image_url: seed.image_url});
    pic.save((err, pic) => {
      if(err) {
        return console.error(err);
      } else {
        console.log("SOWING THE SEEEEEEEDS!!!!!");
      }
    });
  });
};