const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to mongoDB!');
});


let photoSchema = mongoose.Schema({
  product: String,
  color: String,
  image_url: String
});

let Photos = mongoose.model('Photos', photoSchema);

let getAllPhotos = (callback) => {
  return Photos.find({}, {}, { color: "Hyllie dark gray", limit: 7 }).exec((err, result) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};



module.exports = {
  Photos,
  db,
  getAllPhotos
}