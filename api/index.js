const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/bombcombos');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const schemas = {
	things: new Schema({
		id: Number,
		name: String
	})
};

db.on('error', err => {
	if (err) throw err;
});

db.once('open', () => {
	// Ping to test API
	router.get('/ping', (req, res) => res.status(200).send('pong'));

	// Start our API routes
	router.get('/things', (req, res) => {
		const Things = db.model('things', schemas.things);

		Things.find((err, things) => {
			if (err) {
				console.trace(err);
				res.status(500).send('Error getting things');
			}

			console.log('things ->', things);

			res.status(200).json(things);
		});
	});

	// next();
});

module.exports = router;
