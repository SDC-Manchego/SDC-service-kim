var fs = require('fs');
const path = require('path');
var csvWriter = require('csv-write-stream');
var writer = csvWriter({sendHeaders: false});
var faker = require('faker');

let allRecords = [];
let id = 8000000;
let product;
let color;
let url;

 for(let i = 0; i < 1000000; i++) {
    id += 1;
    product = faker.commerce.product();
    color = faker.commerce.color();
    url = faker.image.image();
    let obj = {id: id, prod: product, col: color, url: url}
    // allRecords.push(obj);
    writer.write(obj)
 }

var csvFilename = path.join(__dirname, 'photo.csv')

writer.pipe(fs.createWriteStream(csvFilename, {flags: 'a'}))
// writer.write({id: '10000005', prod: 'append', col: 'pls', url: 'pls.com'})