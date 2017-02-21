const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./api');

const SERVER = {
	app: express(),
	port: 3000
};

const db = (req, res, next) => {
	mongoose.connect('mongodb://localhost:27017/bombcombos');
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => next());
};

// Middleware
SERVER.app.use(db);
SERVER.app.use('/api', api);
SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(express.static(path.join(__dirname, 'build')));

// Start server
SERVER.app.listen(SERVER.port, () => {
	console.log(`Port ${SERVER.port} is lit fam 🔥 🔥 🔥`);
});
