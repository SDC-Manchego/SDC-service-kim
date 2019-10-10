const express = require('express');
// extra middleware to import
const morgan = require('morgan');
// app creation
const app = express();
// port to listen
const port = 3000;

//use middelware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/photos', (req, res) => {
  res.send('Hello World');
});

// listen on port
app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});

