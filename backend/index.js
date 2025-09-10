// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// const RegisterModel = require('./models/RegisterModel');
// const PetModel = require('./models/PetModel');
// const FeedbackModel = require('./models/FeedbackModel');

// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect("mongodb://localhost:27017/PET_ADOPTION", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Fetch all users
// app.get('/users', (req, res) => {
//   RegisterModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // User login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   RegisterModel.findOne({ email: email })
//     .then(user => {
//       if (user) {
//         if (user.password === password) {
//           res.json({ status: "success", role: user.role });
//         } else {
//           res.status(400).json({ error: "Incorrect password" });
//         }
//       } else {
//         res.status(404).json({ error: "User not found" });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Register a new user
// app.post('/register', (req, res) => {
//   RegisterModel.create(req.body)
//     .then(register => res.json(register))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Add a new pet
// app.post('/add-pet', (req, res) => {
//   PetModel.create(req.body)
//     .then(pet => res.json(pet))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Fetch all pets
// app.get('/pets', (req, res) => {
//   PetModel.find()
//     .then(pets => res.json(pets))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Fetch pet details by ID
// app.get('/pets/:id', (req, res) => {
//   PetModel.findById(req.params.id)
//     .then(pet => {
//       if (pet) {
//         res.json(pet);
//       } else {
//         res.status(404).json({ error: "Pet not found" });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Update pet details
// app.put('/pets/:id', (req, res) => {
//   PetModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(updatedPet => res.json(updatedPet))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Update user role
// app.put('/users/:id', (req, res) => {
//   RegisterModel.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true })
//     .then(updatedUser => res.json(updatedUser))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Add a feedback route
// app.post('/feedback', (req, res) => {
//   const { username, feedback } = req.body;

//   // Ensure both fields are present
//   if (!username || !feedback) {
//     return res.status(400).json({ error: 'Username and feedback are required' });
//   }

//   FeedbackModel.create({ username, feedback })
//     .then(newFeedback => res.json(newFeedback))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Fetch all feedbacks (for admin view)
// app.get('/feedback', (req, res) => {
//   FeedbackModel.find()
//     .then(feedbacks => res.json(feedbacks))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Delete User
// app.delete('/users/:id', (req, res) => {
//     RegisterModel.findByIdAndDelete(req.params.id)
//         .then(() => res.json({ message: 'User deleted successfully!' }))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// // Delete Pet
// app.delete('/pets/:id', (req, res) => {
//     PetModel.findByIdAndDelete(req.params.id)
//         .then(() => res.json({ message: 'Pet deleted successfully!' }))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// // Delete Feedback
// app.delete('/feedback/:id', (req, res) => {
//     FeedbackModel.findByIdAndDelete(req.params.id)
//         .then(() => res.json({ message: 'Feedback deleted successfully!' }))
//         .catch(err => res.status(400).json('Error: ' + err));
// });



// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });






















// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// const RegisterModel = require('./models/RegisterModel');
// const PetModel = require('./models/PetModel');
// const FeedbackModel = require('./models/FeedbackModel');

// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect("mongodb://localhost:27017/PET_ADOPTION", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Fetch all users
// app.get('/users', (req, res) => {
//   RegisterModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // User login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   RegisterModel.findOne({ email })
//     .then(user => {
//       if (user) {
//         if (user.password === password) {
//           res.json({ status: "success", role: user.role });
//         } else {
//           res.status(400).json({ error: "Incorrect password" });
//         }
//       } else {
//         res.status(404).json({ error: "User not found" });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Register a new user
// app.post('/register', (req, res) => {
//   RegisterModel.create(req.body)
//     .then(register => res.json(register))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Add a new pet
// app.post('/add-pet', (req, res) => {
//   PetModel.create(req.body)
//     .then(pet => res.json(pet))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Fetch all pets
// app.get('/pets', (req, res) => {
//   PetModel.find()
//     .then(pets => res.json(pets))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Fetch pet details by ID
// app.get('/pets/:id', (req, res) => {
//   PetModel.findById(req.params.id)
//     .then(pet => {
//       if (pet) {
//         res.json(pet);
//       } else {
//         res.status(404).json({ error: "Pet not found" });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Update pet details
// app.put('/pets/:id', (req, res) => {
//   PetModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(updatedPet => res.json(updatedPet))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Update user role
// app.put('/users/:id', (req, res) => {
//   RegisterModel.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true })
//     .then(updatedUser => res.json(updatedUser))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Add a feedback route
// app.post('/feedback', (req, res) => {
//   const { username, feedback } = req.body;

//   // Ensure both fields are present
//   if (!username || !feedback) {
//     return res.status(400).json({ error: 'Username and feedback are required' });
//   }

//   FeedbackModel.create({ username, feedback })
//     .then(newFeedback => res.json(newFeedback))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Fetch all feedbacks (for admin view)
// app.get('/feedback', (req, res) => {
//   FeedbackModel.find()
//     .then(feedbacks => res.json(feedbacks))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Delete User
// app.delete('/users/:id', (req, res) => {
//   RegisterModel.findByIdAndDelete(req.params.id)
//     .then(() => res.json({ message: 'User deleted successfully!' }))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // Delete Pet
// app.delete('/pets/:id', (req, res) => {
//   PetModel.findByIdAndDelete(req.params.id)
//     .then(() => res.json({ message: 'Pet deleted successfully!' }))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // Delete Feedback
// app.delete('/feedback/:id', (req, res) => {
//   FeedbackModel.findByIdAndDelete(req.params.id)
//     .then(() => res.json({ message: 'Feedback deleted successfully!' }))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });


















const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const petRoutes = require("./routes/petRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/PET_ADOPTION", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Routes
app.use("/users", userRoutes);
app.use("/pets", petRoutes);
app.use("/feedback", feedbackRoutes);

// Middleware for handling errors
app.use(errorHandler);

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
