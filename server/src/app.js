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
       console.log('Request for single team');
     });
 });

 //USERS
 //INSERT
 app.post('/USERS', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO USERS SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Created new user');
     });
 });

 //SELECT ALL
app.get('/USERS', function (req, res) {
    connection.query('select * from USERS', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all users');
    });
});

//SELECT BY ID
app.get('/USERS/:id', function (req, res) {
    connection.query('select * from USERS where userID=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for single user');
    });
});

//UPDATE
app.put('/USERS', function (req, res) {
    connection.query('UPDATE `USERS` SET `name`=?,`bracket1`=?, `bracket2`=?, `bracket3`=?,\
                     `bracket4`=?, `bracket5`=?, `bracket6`=?,`email`=?,`score`=? where `userID`=?',
                     [req.body.name,req.body.bracket1, req.body.bracket2, req.body.bracket3, req.body.bracket4, 
                     req.body.bracket5, req.body.bracket6, req.body.email, req.body.score, req.body.userID], 
                     function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('user updated');
     });
 });

 //DELETE
 app.delete('/USERS/', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `USERS` WHERE `userID`=?', [req.body.userID], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

