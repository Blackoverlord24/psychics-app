const express = require('express')
const HomeController = require('../controllers/HomeController')
const router = express.Router()

router.get('/', HomeController.index)
router.get('/answers', HomeController.answers)
router.get('/answers-history', HomeController.historyOfAnswers)
router.get('/psychics-rate', HomeController.psychicsRate)
router.put('/psychics-rate', HomeController.updatePsychicsRate)

module.exports = router