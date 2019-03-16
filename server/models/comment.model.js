const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'UserId can\'t be empty'
    },
    postedDate: {
        type: Date,
        default: Date.now
    },
    commentText: {
        type: String,
        required: 'Comment can\'t be empty'
    }
});
mongoose.model('Comment', commentSchema);