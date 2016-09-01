var express = require('express');
var router = express.Router();

var pg = require('pg');
var connectionString = require('../modules/connection');

router.get('/', function(req, res) {
  pg.connect(connectionString, function (err, client, done) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      client.query('SELECT * FROM sandwiches' , function (err, result) {
       done();



     res.send(result.rows);

     });
   });
 });



// router.get('/:id', function(req, res) {
//
//   var user_id = req.params.id;
//   pg.connect(connectionString, function (err, client, done) {
//     if (err) {
//       res.sendStatus(500);
//       return;
//     }
//     client.query('SELECT * FROM events WHERE user_id =' + user_id, function (err, result) {
//       done();
//
//
//
//     res.send(result.rows);
//
//     });
//   });
// });




module.exports = router;
