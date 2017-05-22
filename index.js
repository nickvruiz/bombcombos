const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = require('./server');

const SERVER = {
	app: express(),
	port: process.env.PORT || 3000,
	static: function(req, res) {
		res.sendFile('./build/index.html');
	}
};

// DB connect
mongoose.Promise = global.Promise;
mongoose.connect('localhost', 'bombcombos');

// Api
SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(bodyParser.json());
SERVER.app.use('/api', server);

// Webserver
SERVER.app.use(express.static(path.join(__dirname, 'build')));
SERVER.app.get('/*', SERVER.static);

// Start server
SERVER.app.listen(SERVER.port, () => {
	console.log(`Port ${SERVER.port} is lit fam 🔥 🔥 🔥`);
});
