const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

MongoClient.connect('mongodb://localhost:27017/things', (err, db) => {
	if (err) {
		console.trace(err);
	}

	db.things.find().toArray((err, res) => {
		if (err) {
			console.trace(err);
		}

		console.log('res ->', res);
	});
});

app.get('/ping', (req, res) => {
	console.log('pong');
});

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
	console.log(`Listening on port ${SERVER_PORT}`);
});
