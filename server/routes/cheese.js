var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/cheese';

router.get('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM sandwiches ",
         function(err, result) {
            if (err) {
                console.log(err, "sandwich error");
            }
            done();
            //console.log(result);
            res.send(result.rows);

        });
    });

});



module.exports = router;
