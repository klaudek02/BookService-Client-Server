const express = require('express');
const router = express.Router();
const news_controller = require('../controllers/news.controller');



router.post('/', news_controller.news_create)
router.get('/:id', news_controller.news_read)
router.put('/:id', news_controller.news_update)
router.delete('/:id', news_controller.news_delete)
router.get('/', news_controller.news_readAll)

module.exports = router;