const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'store-1:3307',
    user: `root`,
    password: `$aVeryStrongPasswordForRootUser`,
    database: 'Dev_V'
})

module.exports = connection;