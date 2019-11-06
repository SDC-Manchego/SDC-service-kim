var faker = require('faker');
const path = require('path');

const { Client } = require('pg')
const client = new Client({
    user: 'denniskim',
    host: 'localhost',
    database: 'ikea'
})

const newTable = `CREATE TABLE photo(
    id SERIAL PRIMARY KEY,
    product VARCHAR (50) NOT NULL,
    color VARCHAR (50) NOT NULL,
    imageurl VARCHAR (50) NOT NULL
)`

const text = `INSERT INTO photo (product, color, imageurl) VALUES ('couch', 'yellow', 'www.ikea.com')`
const text1 = `INSERT INTO photo (product, color, imageurl) VALUES ('onemo', 'blue', 'www.ddd.com')`

const view = `SELECT * FROM photo`;

const sampleQuery = `SELECT * FROM photo where id > 9999990`

const filePath = path.join(__dirname, 'photo.csv')
const csvToPsql = `COPY photo FROM '${filePath}' DELIMITER ',' CSV`


for(let i = 0; i < 1000; i++) {

}

client.connect()
    .then(() => console.log('connected successfully!'))
    // .then(() => client.query(newTable))
    // .catch(() => console.log('fail at table!'))
    // .then(() => client.query(text1))
    // .catch(() => console.log('fail at text'))
    //     .then(() => {
    //         for(let i = 0; i < 10; i++) {
    //             let name = faker.name.findName();
    //             const text = `INSERT INTO photo (product, color, imageurl) VALUES ('${name}', '${name}', '${name}')`
    //             client.query(text)
    //         }
    //     })
    // .then(() => client.query(`DROP TABLE photo`))
    // .then(() => client.query( view ))
    // .then((res) => console.log(res.rows.length))
    // .then(() => client.query(csvToPsql))
    .then(() => client.query(sampleQuery))
    .then((res) => console.log(res) )
    .then(() => console.log('i got this far'))
    .catch(e => console.log('did not work!!', e))


// console.log(faker.name.findName());