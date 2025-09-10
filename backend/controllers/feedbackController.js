const FeedbackModel = require("../models/FeedbackModel");

const addFeedback = (req, res) => {
  const { username, feedback } = req.body;
  if (!username || !feedback) {
    return res.status(400).json({ error: "Username and feedback are required" });
  }

  FeedbackModel.create({ username, feedback })
    .then(newFeedback => res.json(newFeedback))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getFeedback = (req, res) => {
  FeedbackModel.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(500).json({ error: err.message }));
};

const deleteFeedback = (req, res) => {
  FeedbackModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Feedback deleted successfully!" }))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
  addFeedback,
  getFeedback,
  deleteFeedback,
};
