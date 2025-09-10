const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const FeedbackModel = mongoose.model('Feedback', FeedbackSchema);

module.exports = FeedbackModel;
