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

const seed = require('../seed.js');

// use middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('client/public'));

// enable CORS requests
app.use(cors());

app.get('/api/photos', (req, res) => {
  let id = req.query.product_id;
  // console.log('prod id --->', req.query.product_id);
  db.getAllPhotos(1, (err, result) => {
    res.json(result);
  });
});

app.post('/api/photos', (req, res) => {
  for(let i = 0; i < 8; i++) {
    let oneSeed = seed.seeds[i];
    db.savePhotos(oneSeed);
  }

  res.send('success!')
})


// listen on port
app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});
