var express = require('express');
var router = express.Router();

var pg = require('pg');
var connectionString = require('../modules/connection');

router.get('/', function(req, res) {
	pg.connect(connectionString, function(err, client, done) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		client.query('SELECT * FROM sandwiches', function(err, result) {
			done();
			res.send(result.rows);
		});
	});
});


router.post('/', function(req, res) {
	var sandwich = req.body;
	console.log(sandwich);
	pg.connect(connectionString, function(err, client, done) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		client.query('INSERT INTO sandwiches (name, description, unit_price, active) VALUES ($1, $2, $3, $4)', [sandwich.name, sandwich.description, sandwich.unitPrice, sandwich.active],
			function(err, result) {
				done();
				if (err) {
					console.log(err);
					res.sendStatus(500);
					return;
				}

				res.sendStatus(200);
			});
	});
});

router.delete('/', function(req, res) {
  var sandwich = req.body;
  pg.connect(connectionString, function(err, client, done) {
  	if (err) {
  		res.sendStatus(500);
  		return;
  	}
  	// client.query('DELETE FROM sandwiches WHERE id =' + sandwich.id,
  	//   function(err, result){
  	//   done();
  	//   if (err) {
  	//     console.log(err);
  	//     res.sendStatus(500);
  	//     return;
  	//   }

  // 	res.sendStatus(200);
  // })

});
});

router.put('/', function(req, res){
  var editedSandwich = req.body;
  console.log("put request fired: ", editedSandwich);
    pg.connect(connectionString, function(err, client, done){
    if (err) {
      res.sendStatus(500);
      return;
    }
    client.query('UPDATE sandwiches SET name = $1, description = $2, unit_price= $3, active = $4 WHERE id =' + editedSandwich.id, [editedSandwich.name, editedSandwich.description, editedSandwich.unit_price, editedSandwich.active],
      function(err, result){
      done();
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }

      res.sendStatus(200);

    });
  });
});

module.exports = router;
