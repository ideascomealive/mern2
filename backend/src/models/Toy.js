var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema for toys
var Toy = new Schema({
	toy: {
		type: String
	},

}, {
	collection: 'toys'
});
module.exports = mongoose.model('Toy', Toy);