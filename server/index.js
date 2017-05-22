const router = require('express').Router();
const Things = require('./api/Things');

// Things
router.get('/things', Things.get);
router.post('/things', Things.post);
router.delete('/things', Things.delete);

// Health check
router.get('/ping', (req, res) => res.status(200).send('pong'));

module.exports = router;
