const router = require("express").Router();
const auth = require('./auth');

// API Routes
router.use('/auth', auth);

module.exports = router;