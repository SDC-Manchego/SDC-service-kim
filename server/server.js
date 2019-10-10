const express = require('express');
// extra middleware to import
const morgan = require('morgan');
// app creation
const app = express();
// port to listen
const port = 3001;

//use middelware

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('client/public'));

app.get('/api/photos', (req, res) => {
  res.send('Hello World');
});

// listen on port
app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});

