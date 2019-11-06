const path = require('path');
var faker = require('faker');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: path.join(__dirname, 'photo.csv'),
    header: [
        {id: 'id', title: 'id'},
        {id: 'prod', title: 'product'},
        {id: 'col', title: 'color'},
        {id: 'url', title: 'imageurl'}
    ]
});
let allRecords = [];
let id = 0;
let product;
let color;
let url;

 for(let i = 0; i < 1000000; i++) {
    id += 1;
    product = faker.commerce.product();
    color = faker.commerce.color();
    url = faker.image.image();
    let obj = {id: id, prod: product, col: color, url: url}
    allRecords.push(obj);
 }


// const records = [
//     {id: '1', prod: 'chair', col: 'blue', url: 'ikea.com'},
//     {id: '2', prod: 'food', col: 'green', url: 'something.com'},
//     {id: '3', prod: 'desk', col: 'purple', url: 'purp.com'},
//     {id: '4', prod: 'phone', col: 'black', url: 'nada.com'},
    
// ];
 
csvWriter.writeRecords(allRecords)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
 
// This will produce a file path/to/file.csv with following contents:
//
//   NAME,LANGUAGE
//   Bob,"French, English"
//   Mary,English
