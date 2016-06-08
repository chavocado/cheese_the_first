var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/cheese';


router.post('/', function (req, res) {
  var order = req.body;
  console.log(order);
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO customers (first_name, last_name, address, city) ' +
                  'VALUES ($1, $2, $3, $4)',
                   [order.first_name, order.last_name, order.address, order.city],
                 function (err, result) {
                   done();

                   if (err) {
                     res.sendStatus(500);
                     return;
                   }

                   res.sendStatus(201);
                 });
  });
});



module.exports = router;
