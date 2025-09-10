const PetModel = require("../models/PetModel");

const getPets = (req, res) => {
  PetModel.find()
    .then(pets => res.json(pets))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getPetById = (req, res) => {
  PetModel.findById(req.params.id)
    .then(pet => {
      if (pet) {
        res.json(pet);
      } else {
        res.status(404).json({ error: "Pet not found" });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const addPet = (req, res) => {
  PetModel.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => res.status(500).json({ error: err.message }));
};

const updatePet = (req, res) => {
  PetModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(500).json({ error: err.message }));
};

const deletePet = (req, res) => {
  PetModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Pet deleted successfully!" }))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
  getPets,
  getPetById,
  addPet,
  updatePet,
  deletePet,
};
