const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const server = require('./server');

const SERVER = {
	app: express(),
	port: process.env.PORT || 3000
};

// Middleware
SERVER.app.use('/api', server);
SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(express.static(path.join(__dirname, 'build')));

// Start server
SERVER.app.listen(SERVER.port, () => {
	console.log(`Port ${SERVER.port} is lit fam 🔥 🔥 🔥`);
});