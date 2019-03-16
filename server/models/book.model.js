const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: 'Book name can\'t be empty'
    },
    genre: {
        type: String,
        required: 'Genre can\'t be empty'
    },
    premierDate: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Book', bookSchema);