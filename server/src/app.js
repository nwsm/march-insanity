const express = require('express')
const cors = require('cors')
const path = require('path')    // <-- added
const config = require('./config/config')
var mysql = require('mysql');
var bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../../client/dist')))    // <-- added
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var connection = mysql.createConnection('mysql://t8duqyzxyq4s62rz:hyfshhrceynu8ldm@l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x0027tll75uqeyj9');

connection.connect((error) => {
    if(error){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
  });
app.listen(config.port)
console.log(`Server started on port ${config.port}`)

//TEAMS
//SELECT ALL
app.get('/TEAMS', function (req, res) {
    connection.query('select * from TEAMS', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all teams');
    });
});

//SELECT BY ID
app.get('/TEAMS/:id', function (req, res) {
    connection.query('select * from TEAMS where teamID=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //USERS
 //Create user
 app.post('/USERS', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO USERS SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
/*connection.query('SELECT teamName FROM TEAMS WHERE teamID in (SELECT team1 FROM GAMES) ', function(err, rows, fields) {
    if (err) throw err;
    console.log('Team1 is: ', rows[0].teamName);
});*/
