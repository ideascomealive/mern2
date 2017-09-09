var express = require('express');
var app = express();
var toyRouter = express.Router();

//require model
var Toy = require('../models/Toy');

//define routes
toyRouter.route('/add/post').post(function (req, res) {
	var toy = new Toy(req.body);
	toy.save()
	.then(toy => {
		res.json('Toy added successfully.');
	})
	.catch(err => {
		res.status(400).send('Unable to save to the database.');
	});
});

toyRouter.route('/').get(function (req, res) {
	Toy.find( function (err, theToys) {
		if(err) {
			console.log(err);
		} else {
			res.json(theToys);
		}
	});
});
// Defined edit route
toyRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Toy.findById(id, function (err, toy){
      res.json(toy);
  });
});

//  Defined update route
toyRouter.route('/update/:id').post(function (req, res) {
  Toy.findById(req.params.id, function(err, toy) {
    if (!toy)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      toy.toy = req.body.toy;

      toy.save().then(toy => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
toyRouter.route('/delete/:id').get(function (req, res) {
  Toy.findByIdAndRemove({_id: req.params.id},
	   function(err, toy){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = toyRouter;