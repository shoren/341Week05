const express = require('express');
const router = express.Router();

const openCors = require("../middleware/openCors");
router.use('/contacts',require('./contacts'));
router.use('/api-docs', require('./docs'));
router.use([openCors, express.json()]);

module.exports = router;