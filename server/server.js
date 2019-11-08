var nr = require('newrelic');

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

const pool = require('../queries.js');


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
  let queryVar = `SELECT * FROM photo where id = ${id}`

  pool.query(queryVar, (err, result) => {
    if(err) {
      console.log(err)
    }
    res.status(200).json(result.rows)
  })
});

app.post('/api/photos', (req, res) => {
  let queryVar = `INSERT INTO photo (id, product, color, imageurl) VALUES ('${req.body.id}','${req.body.product}', '${req.body.color}', '${req.body.imageurl}')`

  pool.query(queryVar, (err, result) => {
    if(err) {
      console.log(err)
    }
    res.status(200).json(result)
  })
}); 

app.put('/api/photos', (req, res) => {
  let id = req.query.product_id;
  let key = Object.keys(req.body)[0];
  let value = Object.values(req.body)[0];

  let queryVar = `UPDATE photo SET ${key} = '${value}' WHERE photo.id = ${id}`
  
  pool.query(queryVar, (err, result) => {
    if(err) {
      console.log(err)
    }
    res.status(200).json(result)
  })
})

app.delete('/api/photos', (req, res) => {
  let id = req.query.product_id;
  let queryVar = `DELETE FROM photo WHERE id = ${id}`;

  pool.query(queryVar, (err, result) => {
    if(err) {
      console.log(err)
    }
    res.status(200).json(result)
  })

})


// listen on port
app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});
