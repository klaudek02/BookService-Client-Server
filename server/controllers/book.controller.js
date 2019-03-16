const Book = require('../models/Book');


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
    Book.find({bookName : req.params.bookName}, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = function (req, res,next) {
    Book.update({bookName : req.params.bookName},{genre: req.params.genre}, function (err, book) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Book udpated.');
        } else {
            res.redirect('/')
        }
    });


};

exports.book_delete = function (req, res,next) {
    Book.deleteOne({bookName : req.params.bookName}, function (err,book) {
        if(req.isAuthenticated()) {
        if (err) return next(err);
        res.send('Book deleted successfully!');
        } else {
            res.redirect('/')
        }
    })

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