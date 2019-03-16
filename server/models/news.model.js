const mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'UserId can\'t be empty'
    },
    topic: {
        type: String,
        required: 'Topic can\'t be empty'
    },
    description: {
        type: String,
        required: 'Description can\'t be empty'
    },
    postedDate: {
        type:Date,
        default: Date.now
    },
    comments: [{type: Object}]
});

mongoose.model('News', newsSchema);