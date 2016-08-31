var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');


router.post('/', function (req, res) {
  var order = req.body;
  console.log(order);
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }
    console.log('connectionString:', connectionString);
    console.log('client:', client);
    client.query( 'INSERT INTO customers (full_name, email, address, city) ' +
                  'VALUES ($1, $2, $3, $4) returning id;',
                   [order.full_name, order.email, order.address, order.city],
                 function (err, result) {
                   if (err) {
                     res.sendStatus(500);
                     return;
                   }
                   console.log('result',result.rows[0].id);
                   client.query('INSERT INTO orders (customer_id, payment_type, total, gc1, gc2, gc3, gc4, status)' +
                                'VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                                [result.rows[0].id, order.payment, order.gcTotal, order.gc1, order.gc2, order.gc3, order.gc4, 'Recieved'],
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

router.put('/status', function(req, res) {
    var order = req.body;
     console.log('HERE FOOL', order);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE orders SET status = $1 WHERE id = $2 ',[order.status, order.id],
                function(err, result) {
                    done();
                    if (err) {
                        console.log('put err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(201);
                });
    });
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('DELETE FROM orders WHERE id = $1 ',[id],
                function(err, result) {
                    done();
                    if (err) {
                        console.log('delete err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(201);
                });
    });
});

module.exports = router;
