const express = require('express')
const HomeController = require('../controllers/HomeController')
const router = express.Router()

router.get('/', HomeController.index)
router.get('/answers', HomeController.getAnswers)

module.exports = router