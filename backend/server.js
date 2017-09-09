var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 4200;

//mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/newMern')
	.then(() => {
		console.log('Mongoose Started');
	})
	.catch(err => {
		console.log('Mongoose starting error:', err.stack);
		process.exit(1);
	});

// require in toy router - this express version
var toyRouter = require('./src/routes/toyRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/toys', toyRouter);

app.listen(port, function() {
	console.log('Server is running on port: ', port);
});