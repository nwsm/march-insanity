const express = require('express')
const cors = require('cors')
const path = require('path')    // <-- added
const config = require('./config/config')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../../client/dist')))    // <-- added

app.listen(config.port)
console.log(`Server started on port ${config.port}`)

var mysql = require('mysql');
var connection = mysql.createConnection('mysql://t8duqyzxyq4s62rz:hyfshhrceynu8ldm@l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x0027tll75uqeyj9');

connection.connect();
connection.query('SELECT teamName FROM TEAMS WHERE teamID in (SELECT team1 FROM GAMES) ', function(err, rows, fields) {
    if (err) throw err;
    console.log('Team1 is: ', rows[0].teamName);
});
connection.end();