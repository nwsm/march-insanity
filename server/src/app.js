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
//app.listen(config.port,'localhost')
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
        console.log('Request for single user by id');
    });
});

//UPDATE
app.put('/USERS', function (req, res) {
    connection.query('UPDATE `USERS` SET `name`=?,`bracketCollection1`=?, `bracketCollection2`=?, `bracketCollection3`=?,\
                     `email`=? where `userID`=?',
                     [req.body.name,req.body.bracketCollection1, req.body.bracketCollection2, req.body.bracketCollection3, 
                      req.body.email, req.body.userID], function (error, results, fields) {
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
       res.end('User has been deleted!');
     });
 });

 //GROUPS
 //INSERT
 app.post('/GROUPS', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO GROUPS SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Created new group');
     });
 });

//SELECT ALL
app.get('/GROUPS', function (req, res) {
    connection.query('select * from GROUPS', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all groups');
    });
});

//SELECT BY ID
app.get('/GROUPS/:id', function (req, res) {
    connection.query('select * from GROUPS where groupName=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for single group');
    });
});

//UPDATE
app.put('/GROUPS', function (req, res) {
    connection.query('UPDATE `GROUPS` SET `groupAdmin`=? where `groupName`=?',
                     [req.body.groupAdmin, req.body.groupName], 
                     function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('group updated');
     });
 });

//DELETE
app.delete('/GROUPS/', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `GROUPS` WHERE `groupName`=?', [req.body.groupName], function (error, results, fields) {
       if (error) throw error;
       res.end('Group has been deleted!');
     });
 });

 //USERGROUP
 //INSERT
 app.post('/USERGROUP', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO USERGROUP SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Created new usergroup record');
     });
 });
 //SELECT ALL
 app.get('/USERGROUP', function (req, res) {
    connection.query('select * from USERGROUP', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all usergroups');
    });
});

 //SELECT ALL GROUPS FOR USER BY ID
 app.get('/USERGROUP/:id', function (req, res) {
    connection.query('select * from USERGROUP where userID=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all groups for user');
    });
}); 

 //DELETE
 app.delete('/USERGROUP', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `USERGROUP` WHERE `groupName`=? AND `userID`=?', [req.body.groupName, req.body.userID], function (error, results, fields) {
       if (error) throw error;
       res.end('Usergroup has been deleted!');
     });
 });

 //GAMES
 //INSERT
 app.post('/GAMES', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO GAMES SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Created new game');
     });
 });

 //SELECT BY ID
 app.get('/GAMES/:id', function (req, res) {
    connection.query('select * from GAMES where gameID=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for single game');
    });
}); 

 //SELECT ALL
 app.get('/GAMES/', function (req, res) {
    connection.query('select * from GAMES', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all games');
    });
}); 

 //UPDATE
app.put('/GAMES', function (req, res) {
    connection.query('UPDATE `GAMES` SET `team1`=?, `team2`=?, `winner`=? where `gameID`=?',
                     [req.body.team1, req.body.team2, req.body.winner, req.body.gameID], 
                     function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('group updated');
     });
 });

 //BRACKETCOLLECTIONS
 //INSERT
 app.post('/BRACKETCOLLECTIONS', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO BRACKETCOLLECTIONS SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Created new bracket collection');
     });
 });

 //SELECT ALL
 app.get('/BRACKETCOLLECTIONS/', function (req, res) {
    connection.query('select * from BRACKETCOLLECTIONS', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all collections');
    });
});

 //SELECT BY ID
 app.get('/BRACKETCOLLECTIONS/:id', function (req, res) {
    connection.query('select * from BRACKETCOLLECTIONS where CollectionID=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for single collection');
    });
}); 

 //UPDATE
 app.put('/BRACKETCOLLECTIONS', function (req, res) {
    connection.query('UPDATE `BRACKETCOLLECTIONS` SET `Bracket1ID`=?, `Bracket2ID`=?,`Bracket3ID`=?, `Bracket4ID`=?,\
                     `Bracket5ID`=?, `Bracket6ID`=?, `score`=? where `CollectionID`=?',
                     [req.body.Bracket1ID, req.body.Bracket2ID, req.body.Bracket3ID, req.body.Bracket4ID, req.body.Bracket5ID, 
                      req.body.Bracket6ID, req.body.score, req.body.CollectionID], 
                     function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Collection updated');
     });
 });

 //DELETE
 app.delete('/BRACKETCOLLECTIONS', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `BRACKETCOLLECTIONS` WHERE `CollectionID`=?', [req.body.CollectionID], function (error, results, fields) {
       if (error) throw error;
       res.end('Collection has been deleted!');
     });
 });


 //BRACKETS
 //INSERT

 //SELECT ALL

 //SELECT BY ID

 //UPDATE

 //DELETE

 