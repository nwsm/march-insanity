const express = require('express')
const cors = require('cors')
const path = require('path')    // <-- added
const config = require('./config/config')
var mysql = require('mysql');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../../client/dist')))    // <-- added
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var connection = mysql.createConnection('mysql://t8duqyzxyq4s62rz:hyfshhrceynu8ldm@l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x0027tll75uqeyj9');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'luernese2018@gmail.com',
      pass: 'lenscop2018'
    }
  });

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

 app.put('/USERS/UPDATEBC', function (req, res) {
    if(req.body.num==1){
        connection.query('UPDATE `USERS` SET `bracketCollection1`=? where `userID`=?',
                        [req.body.bracketCollectionID, req.body.userID], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('user updated');
        });
    }
    else if(req.body.num==2){
        connection.query('UPDATE `USERS` SET `bracketCollection2`=? where `userID`=?',
                        [req.body.bracketCollectionID, req.body.userID], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('user updated');
        });        
    }  
    else if(req.body.num==3){
        connection.query('UPDATE `USERS` SET `bracketCollection3`=? where `userID`=?',
                        [req.body.bracketCollectionID, req.body.userID], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('user updated');
        });        
    }        

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
    connection.query('INSERT INTO BRACKETCOLLECTIONS SET ?', params, function (error, results, fields) {
       if (error) throw error;
       //res.end(JSON.stringify(results));
       console.log('Created new bracket collection');
     });

    var records = [
        [params.CollectionID+"--1",1],
        [params.CollectionID+"--2",2],
        [params.CollectionID+"--3",3],
        [params.CollectionID+"--4",4],
        [params.CollectionID+"--5",5],
        [params.CollectionID+"--6",6]
    ]

    connection.query('INSERT INTO BRACKETS (bracketID,bracketType) VALUES ?', [records], function (error, results, fields) {
        if (error) throw error;
        console.log('Created 6 new brackets');
        });       
        
        connection.query('UPDATE `BRACKETCOLLECTIONS` SET `Bracket1ID`=?, `Bracket2ID`=?, `Bracket3ID` =?, `Bracket4ID`  =?, `Bracket5ID`  =?, `Bracket6ID`  =? where `CollectionID`=?',
                        [params.CollectionID+"--1", params.CollectionID+"--2", params.CollectionID+"--3",
                         params.CollectionID+"--4", params.CollectionID+"--5", params.CollectionID+"--6", params.CollectionID], 
                        function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('group updated');
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
 app.post('/BRACKETS/', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO BRACKETS SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Created new brackets');
     });
 });
 //SELECT ALL
 app.get('/BRACKETS/', function (req, res) {
    connection.query('select * from BRACKETS', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for all brackets');
    });
});

 //SELECT BY ID
 app.get('/BRACKET/:id', function (req, res) {
    connection.query('select * from BRACKETS where bracketID=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log('Request for single bracket');
    });
});

 //UPDATE
 app.put('/BRACKETS', function (req, res) {
    connection.query('UPDATE `BRACKETS` SET `Winner1`=?, `Winner2`=?, `Winner3`=?, `Winner4`=?,\
                     `Winner5`=?, `Winner6`=?, `Winner7`=?, `Winner8`=?,\
                     `Winner9`=?, `Winner10`=?, `Winner11`=?, `Winner12`=?,\
                     `Winner13`=?, `Winner14`=?, `Winner15`=?, `Winner16`=?,\
                     `Winner17`=?, `Winner18`=?, `Winner19`=?, `Winner20`=?,\
                     `Winner21`=?, `Winner22`=?, `Winner23`=?, `Winner24`=?,\
                     `Winner25`=?, `Winner26`=?, `Winner27`=?, `Winner28`=?,\
                     `Winner29`=?, `Winner30`=?, `Winner31`=?, `Winner32`=?,\
                     `Winner33`=?, `Winner34`=?, `Winner35`=?, `Winner36`=?,\
                     `Winner37`=?, `Winner38`=?, `Winner39`=?, `Winner40`=?,\
                     `Winner41`=?, `Winner42`=?, `Winner43`=?, `Winner44`=?,\
                     `Winner45`=?, `Winner46`=?, `Winner47`=?, `Winner48`=?,\
                     `Winner49`=?, `Winner50`=?, `Winner51`=?, `Winner52`=?,\
                     `Winner53`=?, `Winner54`=?, `Winner55`=?, `Winner56`=?,\
                     `Winner57`=?, `Winner58`=?, `Winner59`=?, `Winner60`=?,\
                     `Winner61`=?, `Winner62`=?, `Winner63`=?, `bracketType`=?\
                     where `bracketID`=?',
                     [req.body.Winner1, req.body.Winner2, req.body.Winner3, req.body.Winner4,
                      req.body.Winner5, req.body.Winner6, req.body.Winner7, req.body.Winner8,
                      req.body.Winner9, req.body.Winner10, req.body.Winner11, req.body.Winner12,
                      req.body.Winner13, req.body.Winner14, req.body.Winner15, req.body.Winner16,
                      req.body.Winner17, req.body.Winner18, req.body.Winner19, req.body.Winner20,
                      req.body.Winner21, req.body.Winner22, req.body.Winner23, req.body.Winner24,
                      req.body.Winner25, req.body.Winner26, req.body.Winner27, req.body.Winner28,
                      req.body.Winner29, req.body.Winner30, req.body.Winner31, req.body.Winner32,
                      req.body.Winner33, req.body.Winner34, req.body.Winner35, req.body.Winner35,
                      req.body.Winner37, req.body.Winner38, req.body.Winner39, req.body.Winner40,
                      req.body.Winner41, req.body.Winner42, req.body.Winner43, req.body.Winner44,
                      req.body.Winner45, req.body.Winner46, req.body.Winner47, req.body.Winner48,
                      req.body.Winner49, req.body.Winner50, req.body.Winner51, req.body.Winner52,
                      req.body.Winner53, req.body.Winner54, req.body.Winner55, req.body.Winner56,
                      req.body.Winner57, req.body.Winner58, req.body.Winner59, req.body.Winner60,
                      req.body.Winner61, req.body.Winner62, req.body.Winner63,
                      req.body.bracketType,req.body.bracketID], 
                     function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log('Bracket updated');
     });
 });
 
 //DELETE
 app.delete('/BRACKETS', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `BRACKETS` WHERE `bracketID`=?', [req.body.bracketID], function (error, results, fields) {
       if (error) throw error;
       res.end('bracket has been deleted!');
     });
 });

 app.post('/auth/google/', function (req, res) {
    var token = req.body.token
    const {OAuth2Client} = require('google-auth-library');
    const client = new OAuth2Client('704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com');
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com',
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        var ourid = 'gg-' + userid
        connection.query('select * from USERS where userID=?', [ourid], function (error, results, fields) {
            if (error) throw error;
            if(results.length>0){
                console.log("user found")
                res.end(JSON.stringify(results));
            }else{
                connection.query('INSERT INTO USERS SET ?', { userid : ourid, email : payload.email, name : payload.name}, function (error2, results2, fields2) {
                    if (error2) throw error2;
                    res.send({ userid : ourid, email : payload.email, name : payload.name});
                    });
            }
        });    
    }
    verify().catch(console.error);    
 });

 app.post('/auth/facebook/', function (req,res) {
    var ourid = 'fb-' + req.body.fbID
    var ouremail = req.body.fbEmail
    var ourname = req.body.fbName
    console.log(ourid, ouremail,ourname)
    async function checkIfExists(){
        connection.query('select * from USERS where userID=?', [ourid], function (error, results, fields) {
            if (error) throw error;
            if(results.length>0){
                console.log("fb user found")
                res.end(JSON.stringify(results));
            }else{
                console.log("fb user not found")
                console.log(ourid, ouremail,ourname)
                var params = { userid : ourid, email : ouremail, name : ourname}
                connection.query('INSERT INTO USERS SET ?', params, function (error2, results2, fields2) {
                    if (error2) throw error2;
                    res.end(JSON.stringify(results2));
                });
            }
        });    
    }
    checkIfExists().catch(console.error);

 });

 //SEND EMAIL
 app.get('/SEND/:email/:groupName', function (req, res)  {
    var mailOptions = {
        from: 'luernese2018@gmail.com',
        to: req.params.email,
        subject: 'March Insanity Invites',
        text: 'Come Play March Insanity! Join Group ' + req.params.groupName + '! ' + 'https://march-insanity.herokuapp.com/#/Groups/'+ req.params.groupName
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
 });