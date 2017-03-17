const router = require('express').Router();
const db = require('./db');
const Things = require('./api/Things');

// Handle db erros
db.connect.on('error', console.error.bind(console, 'connection error:'));

// Connect db
db.connect.once('open', () => {
	router.get('/things', Things.get);

	// Health check
	router.get('/ping', (req, res) => res.status(200).send('pong'));
});

module.exports = router;
