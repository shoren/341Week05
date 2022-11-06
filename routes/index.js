const { application } = require('express');
const express = require('express');
const router = express.Router();

const openCors = require("../middleware/openCors");
router.use('/characters',require('./characters'));
router.use('/gloves',require('./gloves'));
router.use('/api-docs', require('./docs'));
router.use([openCors, express.json()]);
router.use("/")

app.use(
    (error,req,res,next) =>{
        res.status(400);

        const statusMap = {
            ValidationError: 400,
        };

        res.status(statusMap[error.name] || 500);

        res.json({ error: error.message});
    }
);

module.exports = router;