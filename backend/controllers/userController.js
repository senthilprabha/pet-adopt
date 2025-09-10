const RegisterModel = require("../models/RegisterModel");

const getUsers = (req, res) => {
  RegisterModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ status: "success", role: user.role });
        } else {
          res.status(400).json({ error: "Incorrect password" });
        }
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const registerUser = (req, res) => {
  RegisterModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.status(500).json({ error: err.message }));
};

const updateUserRole = (req, res) => {
  RegisterModel.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json({ error: err.message }));
};

const deleteUser = (req, res) => {
  RegisterModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "User deleted successfully!" }))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
  getUsers,
  loginUser,
  registerUser,
  updateUserRole,
  deleteUser,
};
