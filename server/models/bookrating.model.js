const mongoose = require('mongoose');

var bookRatingSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: 'BookId can\'t be empty'
    },
    bookRaing: {
        type: Number,
        min: 1,
        max: 5,
        required: 'Book rating can\'t be empty'
    },
    ratingDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('BookRating', bookRatingSchema);