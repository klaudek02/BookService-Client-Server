const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book.controller');



router.post('/', book_controller.book_create)
router.get('/:bookName', book_controller.book_read)
router.put('/:bookName/:genre', book_controller.book_update)
router.delete('/:bookName, book_controller.book_delete)
router.get('/', book_controller.book_readAll)
router.get('/readByGenre/:bookGenre', book_controller.book_by_genre)

module.exports = router;