var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');

router.get('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM scholars ", function(err, result) {
            if (err) {
                console.log(err, "FOOL");
            }
            done();
            res.send(result.rows);

        });
    });

});

router.get('/active', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM scholars WHERE active = TRUE", function(err, result) {
            if (err) {
                console.log(err, "FOOL");
            }
            done();
            res.send(result.rows);

        });
    });

});

router.put('/status', function(req, res) {
    var scholar = req.body;
     console.log('HERE FOOL', scholar);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE scholars SET active = $1 WHERE id = $2 ',[scholar.active, scholar.id],
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
            client.query('DELETE FROM scholars WHERE id = $1 ',[id],
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
