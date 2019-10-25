/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const { db } = require('./database/index.js');
const { Photos } = require('./database/index.js');

const seeds = [
  {
    product: 'FRIHETEN',
    index: 0,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey1.webp',
  },
  {
    product: 'FRIHETEN',
    index: 1,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey2.webp',
  },
  {
    product: 'FRIHETEN',
    index: 2,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey3.webp',
  },
  {
    product: 'FRIHETEN',
    index: 3,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey4.webp',
  },
  {
    product: 'FRIHETEN',
    index: 4,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey5.webp',
  },
  {
    product: 'FRIHETEN',
    index: 5,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey6.webp',
  },
  {
    product: 'FRIHETEN',
    index: 6,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey7.webp',
  },
  {
    product: 'FRIHETEN',
    index: 7,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey8.webp',
  },
  {
    product: 'BRATHULT',
    index: 0,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT1.webp',
  },
  {
    product: 'BRATHULT',
    index: 1,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT2.webp',
  },
  {
    product: 'BRATHULT',
    index: 2,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT3.webp',
  },
  {
    product: 'BRATHULT',
    index: 3,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT4.webp',
  },
  {
    product: 'BRATHULT',
    index: 4,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT5.webp',
  },
  {
    product: 'BRATHULT',
    index: 5,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT6.webp',
  },
  {
    product: 'BRATHULT',
    index: 6,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT7.webp',
  },
  {
    product: 'BRATHULT',
    index: 7,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/BR%C3%85THULT8.webp',
  },
  {
    product: 'GRONLID',
    index: 0,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID1.webp',
  },
  {
    product: 'GRONLID',
    index: 1,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID2.webp',
  },
  {
    product: 'GRONLID',
    index: 2,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID3.webp',
  },
  {
    product: 'GRONLID',
    index: 3,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID4.webp',
  },
  {
    product: 'GRONLID',
    index: 4,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID5.webp',
  },
  {
    product: 'GRONLID',
    index: 5,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID6.webp',
  },
  {
    product: 'GRONLID',
    index: 6,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID7.webp',
  },
  {
    product: 'GRONLID',
    index: 7,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/GRONLID8.webp',
  },
  {
    product: 'HOLMSUND',
    index: 0,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND1.webp',
  },
  {
    product: 'HOLMSUND',
    index: 1,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND2.webp',
  },
  {
    product: 'HOLMSUND',
    index: 2,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND3.webp',
  },
  {
    product: 'HOLMSUND',
    index: 3,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND4.webp',
  },
  {
    product: 'HOLMSUND',
    index: 4,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND5.webp',
  },
  {
    product: 'HOLMSUND',
    index: 5,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND6.webp',
  },
  {
    product: 'HOLMSUND',
    index: 6,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND7.webp',
  },
  {
    product: 'HOLMSUND',
    index: 7,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/HOLMSUND8.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 0,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN1.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 1,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN2.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 2,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN3.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 3,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN4.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 4,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN5.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 5,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN6.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 6,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN7.webp',
  },
  {
    product: 'SANDBACKEN',
    index: 7,
    color: 'Hyllie dark gray',
    image_url:
      'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/SANDBACKEN8.webp',
  },

];


let counter = 0;
for(var i = 0; i <= 20; i++) {
seeds.forEach((seed, i) => {
  if(i%8 === 0) {
    counter++;
  }
  const pic = new Photos({
    product: seed.product,
    product_id: counter.toString(),
    index: seed.index,
    color: seed.color,
    image_url: seed.image_url,
  });
  pic.save((err, pictures) => {
    if (err) {
      return console.error(err);
    } else {
      console.log('SOWING THE SEEEEEEEDS!!!!!');
    }
  });
});
};
