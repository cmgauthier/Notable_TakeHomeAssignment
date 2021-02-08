let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notable'
})

connection.connect(function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('Connected to mysql server')
});

module.exports = connection;