const express = require("express");
const { addFeedback, getFeedback, deleteFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.get("/", getFeedback);
router.post("/", addFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;
