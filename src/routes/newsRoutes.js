const express = require('express');
const NewsController = require('../controllers/newsController');

const router = express.Router();
const newsController = new NewsController();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.post('/', newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

module.exports = router;