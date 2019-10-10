const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to mongoDB!');
});

// define mongoose schema
let photoSchema = mongoose.Schema({
  product: String,
  image_url: String
});

let Photos = mongoose.model('Photos', photoSchema);


let photo1 = new Photos({product: 'Ikea Thing lol', image_url: 'https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaBlack1.webp'});

photo1.save((err, photo) => {
  if(err) {
    return console.log(err);
  } else {
    console.log('Aylmaowedidit');
  }
});




module.exports = {
  Photos,
  db
}