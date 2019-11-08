const Pool = require('pg').Pool

const pool = new Pool({
    user: 'denniskim',
    host: 'localhost',
    database: 'ikea'
})

module.exports = pool;