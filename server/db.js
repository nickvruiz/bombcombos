const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
	connect: mongoose.createConnection('localhost', 'bombcombos'),
	Schema: mongoose.Schema
};
