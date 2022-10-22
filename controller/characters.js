const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// GET fdsaf
const getAllCharacters = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db('Week05').collection('characters').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (error) {
    next(error);
    // res.status(500).send({
    //   message: error.message || 'Some error occurred while retrieving users.'})
    };        //Have to put the name of the Database and the collection that belongs to the database respectively 
  };  //testing here come back to this

  // GET
  const getSingleCharacters = async (req, res, next) => {
    try {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('Week05').collection('characters').find({ _id: userId }); //Find
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
    } catch (error) {
      next(error);
    }
  };

  //POST working!
  const createCharacter = async (req, res, next) => {
    const character = {
      Name: req.body.Name,
      Ascendancy: req.body.Ascendancy,
      LeagueStart: req.body.LeagueStart

      // const { ingredient } = req.query
      // const ingredient = req.query.ingredient    
      // These two lines are equivalent but the top one is shorter 
    };
    const result = await mongodb.getDb().db('Week05').collection('characters').insertOne(character); //insertOne
    if(result.acknowledged){
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the character.');
    }
  };

  // PUT working
  const updateCharacter = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const character = {
      Name: req.body.Name,
      Ascendancy: req.body.Ascendancy,
      LeagueStart: req.body.LeagueStart
    };

    const result = await mongodb.getDb().db('Week05').collection('characters').replaceOne({ _id: userId },character);//replaceOne
    try {
      
    } catch (error) {
      
    }
    if(result.acknowledged){
      res.status(204).send();
    }
  };

  // DELETE  works
  const deleteCharacter = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Week05').collection('characters').remove({ _id: userId },true); // Remove
    console.log(result);
    res.status(200).send();
  };
  
  module.exports = { getAllCharacters,getSingleCharacters,createCharacter,updateCharacter,deleteCharacter };