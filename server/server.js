/* eslint-disable no-console */
const express = require('express');
// extra middleware to import
const morgan = require('morgan');
// app creation
const app = express();

// import cors
const cors = require('cors');

// import database
const db = require('../database/index.js');
// port to listen
const port = 3001;


// const seed = require('../seed.js');

// use middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('client/public'));

// enable CORS requests
app.use(cors());

app.get('/api/photos', (req, res) => {
  let id = req.query.product_id;
  console.log('prod id --->', req.query.product_id);
  db.getAllPhotos(id, (err, result) => {
    res.json(result);
  });
});

app.post('/api/photos', (req, res) => {
  db.savePhotos(req.body, (err, result) => {
    if(err) {
      console.log('error with saving to db', err)
    } else {
      console.log('succesful! and here is the result', result)
    }
  })
  res.send()
}); 

app.put('/api/photos', (req, res) => {
  let id = req.query.product_id;
  let newColor = req.body

  db.updatePhoto(id, newColor, (err, result) => {
    if(err) {
      console.log('error with updating to db!', err)
    } else {
      console.log('successful update!', result)
    }
  })

  res.send(`Received req to update ${id} , ${newColor}`)
})

app.delete('/api/photos', (req, res) => {
  let id = req.query.product_id;

  db.deletePhoto(id, (err, result) => {
    if(err) {
      console.log('error with delete from db!', err)
    } else {
      console.log('success deleting!', result)
    }
  })

  res.send(`delete request received ${id}`)
})


// listen on port
app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});
