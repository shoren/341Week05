const { Schema, model } = require("mongoose");

const CharacterSchema = new Schema({
  Name: { type: String, required: true },
  Ascendancy: { type: String, required: true },
  LeagueStart: { type: [Number], required: true },
});

module.exports = CharacterSchema;