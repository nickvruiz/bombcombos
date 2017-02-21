const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017/bombcombos', (err, db) => {
	if (err) {
		console.trace(err);
		return false;
	}

	// Get all things
	app.get('/things', (req, res) => {
		db.collection('things').find({}).toArray((err, data) => {
			if (err) {
				console.trace(err);
				return false;
			}

			res.send(data);
		});
	});

	// Save things
	// app.post('/things', (req, res) => {
		// Save some stuff
	// });

	// Update things
	// app.put('/things', (req, res) => {
		// Update some stuff
	// });

	// Start server
	const SERVER_PORT = 3000;
	app.listen(SERVER_PORT, () => {
		console.log(`Port ${SERVER_PORT} is lit fam`);
	});
});
