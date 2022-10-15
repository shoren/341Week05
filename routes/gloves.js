//const { Router } = require('express');
const express = require('express');
// const routes = require ('express').Router();
const router = express.Router();
const contactsController = require('../controller/Gloves');

// Get all of the documents in the contacts collection
router.get('/', contactsController.getAllGloves);

// Get one of the documents in the contacts collection
//GET REQUEST
router.get('/:id', contactsController.getSingleGloves);
//POST
router.post('/', contactsController.createGloves);
//PUT
router.put('/:id', contactsController.updateGloves);
//DELETE
router.delete('/:id', contactsController.deleteGloves);

module.exports = router;