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

    client.query( 'INSERT INTO customers (first_name, last_name, address, city) ' +
                  'VALUES ($1, $2, $3, $4) returning id;',
                   [order.first_name, order.last_name, order.address, order.city],
                 function (err, result) {
                   if (err) {
                     res.sendStatus(500);
                     return;
                   }
                   console.log('result',result.rows[0].id);
                   client.query('INSERT INTO orders (customer_id, payment_type, total, gc1, gc2, gc3, gc4, status)' +
                                'VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                                [result.rows[0].id, order.payment, order.gcTotal, order.gc1, order.gc2, order.gc3, order.gc4, 'In Progress'],
                              function (err, result){
                                done();
                                if (err) {
                                  res.sendStatus(500);
                                  return;
                                }
                                  res.sendStatus(201);
                              });
                 }
               );
  });
});

router.get('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM customers " +
                     "JOIN orders ON customers.id = orders.customer_id;", function(err, result) {
            if (err) {
                console.log(err, "FOOL");
            }
            done();
            //console.log(result);
            res.send(result.rows);

        });
    });

});

module.exports = router;
