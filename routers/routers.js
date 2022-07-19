const express= require ('express')
const router =express.Router()
const quizController = require('../controller/quizController')



router.post('/addquestion',quizController.create)
router.get('/question',quizController.read)
router.put('/updatequestion/:id',quizController.updatequestion)
router.delete('/deletequestion/:id',quizController.deletequestion)




module.exports = router