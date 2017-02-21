const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.get('/ping', (req, res) => {
	console.log('pong');
});

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
	console.log(`Listening on port ${SERVER_PORT}`);
});
