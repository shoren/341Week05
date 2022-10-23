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
      if(!userId){
        res.status(400).send({message: "Please provide a Character ID"});
        return;
      }
      const result = await mongodb.getDb().db('Week05').collection('characters').find({ _id: userId }); //Find
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
    } catch (error) {
      res.status(422).json("Character not found");
    }
  };

  //POST working!
  const createCharacter = async (req, res, next) => {
    const character = {
      Name: req.body.Name,
      Ascendancy: req.body.Ascendancy,
      LeagueStart: req.body.LeagueStart
      // const { ingredient } = req.query || const ingredient = req.query.ingredient  These two are equivalent but the left one is shorter 
    };
    try {
      if(!Name || !Ascendancy || !LeagueStart){ // error validation
        res.status(400).send({message: "Please fill out all parts of the form"});
        return;
      }
      const result = await mongodb.getDb().db('Week05').collection('characters').insertOne(character); //insertOne
      if(result.acknowledged){
        res.status(201).json(response);
      } else {
        res.status(500).json('Unable to create character at this time.');
    }
    } catch (error) {
      res.status(500).json('Unable to create character at this time.');
    }
  };

  // PUT working
  const updateCharacter = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const character = {
      Name: req.body.Name,
      Ascendancy: req.body.Ascendancy,
      LeagueStart: req.body.LeagueStart
    }
    try {
      if(!Name || !Ascendancy || !LeagueStart){ // error validation
        res.status(400).send({message: "Please fill out all parts of the form"});
        return;
      }
      const result = await mongodb.getDb().db('Week05').collection('characters').replaceOne({ _id: userId },character);//replaceOne
      if(result.acknowledged){
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json('Unable to update character at this time.');
    }
  };

  // DELETE  works similar to create, just check for id in errors
  const deleteCharacter = async (req, res, next) => {
    try {const userId = new ObjectId(req.params.id);
      if(!userId){ // error validation
        res.status(400).send({message: "Character ID  cannot be found"});
        return;
      }
      const result = await mongodb.getDb().db('Week05').collection('characters').remove({ _id: userId },true); // Remove
      console.log(result);
      res.status(200).send();
    } catch (error) {
      res.status(500).json('Unable to delete character at this time.');
    }};
    
  
  module.exports = { getAllCharacters,getSingleCharacters,createCharacter,updateCharacter,deleteCharacter };