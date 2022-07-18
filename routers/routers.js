const express= require ('express')
const router =express.Router()
const quizcontroller = require('../controller/quizcontroller')



router.post('/addquestion',quizcontroller.create)
router.get('/question',quizcontroller.read)
router.put('/updatequestion/:id',quizcontroller.updatequestion)
router.delete('/deletequestion/:id',quizcontroller.deletequestion)



module.exports = router