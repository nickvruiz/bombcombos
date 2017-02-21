const api = require('express').Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemas = {
	things: new Schema({
		id: Number,
		name: String
	})
};

// Ping to test API
api.get('/ping', (req, res) => res.status(200).send('pong'));

// Start our API routes
api.get('/things', (req, res) => {
	const Things = mongoose.model('things', schemas.things);

	Things.find((err, things) => {
		if (err) {
			console.trace(err);
			res.status(500).send('Error getting things');
		}

		res.status(200).json(things);
	});
});

module.exports = api;
