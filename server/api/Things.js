const db = require('../db');
const schema = db.connect.model('Things', new db.Schema({
	id: Number,
	name: String
}));

module.exports = {
	get: ({ req, res }) => {
		schema.find((err, things) => {
			if (err) {
				console.trace(err);
				res.status(500).send('Error getting things');
			}

			res.status(200).json(things);
		});
	}
};
