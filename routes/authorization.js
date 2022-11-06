const express = require("express");
const router = express.Router();

const authorizationController = require("../controller/authorization.controller");

router.get("/login",authorizationController.login);

module.exports = router;