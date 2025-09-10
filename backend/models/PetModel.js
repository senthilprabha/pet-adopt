
const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: String,
  breed: String,
  img: String,
  message: String,
  age: Number,
  dob: Date, // Date of Birth
  color: String,
  location: String,
  isAvailable: Boolean
});

const PetModel = mongoose.model('Pet', PetSchema);

module.exports = PetModel;
