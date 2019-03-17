const Book = require('../models/book.model');


exports.book_create = function (req, res,next) {
  //  if(req.isAuthenticated()) {
        let book = new Book(
            {
                bookName: req.body.bookName,
                genre: req.body.genre,
                premiereDate: req.body.premiereDate
            }
        );
        book.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('Book Created successfully')
        })
    //} else {
   //     res.redirect('/')
   // }
};

exports.book_read = function (req, res,next) {
    Book.find({bookId : req.params.bookId}, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = function (req, res,next) {
    Book.update({bookId : req.params.bookId},{bookName: req.body.bookName, genre: req.body.genre,
    premiereDate: req.body.premiereDate}, function (err, book) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Book udpated.');
        } else {
            res.redirect('/')
        }
    });


};

exports.book_delete = function (req, res,next) {
    Book.deleteOne({bookId : req.params.bookId}, function (err,book) {
        if(req.isAuthenticated()) {
        res.send('Book removed');
    }});

};

exports.book_readAll = function (req, res,next) {
    Book.find({}, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_by_genre = function (req,res,next){
    Book.findByGenre({bookGenre: req.params.bookGenre}, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};