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
    premiereDate: {
        type: String,
        default: (new Date().toISOString().slice(0,10))
    }
});
module.exports= mongoose.model('Book', bookSchema);