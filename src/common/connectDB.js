
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TIKTOK_DB'
})
connection.connect(function (err) {
    if (err) console.log('connect database failed !!')
})

module.exports = connection
