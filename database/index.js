/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to mongoDB!');
});

const photoSchema = mongoose.Schema({
  product: String,
  product_id: String,
  index: Number,
  color: String,
  image_url: String,
});

const Photos = mongoose.model('Photos', photoSchema);

// eslint-disable-next-line max-len
const getAllPhotos = (id, callback) => Photos.find({ product_id: id }, {}, { sort: { index: 1 }, limit: 8 }).exec((err, result) => {
  if (err) {
    callback(err, null);
  } else {
    callback(null, result);
  }
});

const savePhotos = (seed, callback) => {
  
  let photos = new Photos({
    product: seed.product,
    product_id: seed.product_id,
    index: seed.index,
    color: seed.color,
    image_url: seed.image_url,
  });

  photos.save((err, pictures) => {
    if(err) return console.error(err);
    callback(err, pictures)
  })

}

const updatePhoto = (id, color, callback) => {
    
  Photos.findOneAndUpdate({product_id: id}, color, {new: true}, (err, res) => {
    if(err) {
      console.log('something went wrong updating data!')
    };

    callback(err, res)
  });
}

const deletePhoto = (id, callback) => {
console.log('from database delete', id)
  Photos.deleteOne({product_id: id}, (err, res) => {
    if(err) {
      console.log('something went wrong with delete req!')
    } else {
      callback(err, res)
    }
  })

}

module.exports = {
  Photos,
  db,
  getAllPhotos,
  savePhotos,
  updatePhoto,
  deletePhoto
};
