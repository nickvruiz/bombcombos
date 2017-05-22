const mongoose = require('mongoose');
const thingSchema = new mongoose.Schema({
	name: { type: String, required: true }
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = {
	get: function(req, res) {
		const name = req.query.name;
		const regex = name ? { name: new RegExp(name, 'i') } : {};

		Thing.find(regex).then(data => {
			res.send(data);
		}).catch(err => {
			console.trace(err);
			res.status(500).send('Error getting things');
		});
	},

	post: function(req, res) {
		if (!req.body.name) {
			res.status(422).send('Parameter `name` is required');
			return;
		}

		// Normalize value
		const name = req.body.name.toLowerCase();

		Thing.create({ name }).then(data => {
			res.status(201).send(`${req.body.name} has been saved`);
		}).catch(err => {
			console.trace(err);
			res.status(500).send('Error saving thing');
		});
	},

	delete: function(req, res) {
		if (!req.body.id) {
			res.status(422).send('Parameter `id` is required');
			return;
		}

		Thing.findByIdAndRemove(req.body.id).then(data => {
			res.status(200).send(data);
		}).catch(err => {
			console.trace(err);
			res.status(500).send('Error removing thing');
		});
	}
};
