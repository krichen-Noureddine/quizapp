
var Question= require('../models/quiz');



/************** CREATE (POST) **************/

const create =  (req, res,next) => {
    console.log("Adding new question");
var question = new Question({
quizid: req.body.quizid,
questionId: req.body.questionId,
questionText: req.body.questionText,
answer: req.body.answer,
options: req.body.options
});

question.save((error, qz) => {
if (error) {
    console.log(error);
    res.json({ msg: "some error!" });
}
else {

    res.status(200).json({ message: "yes quiz added!!" })
}
})

};


/************** read (get) **************/

const read= (req, res,next) => {
// const url = `http://localhost:4200/teacher/seequestion`
Question.find({ quizid: req.params.id }, (err, qz) => {
if (err) {
    console.log(error);
    res.json({ errormsg: "some error!" });
}
else {
    res.json({ msg: qz });
}
})
// res.redirect(
//     `${url}`)
};

/************** delete  **************/

const deletequestion = (req, res,next) =>  {
var id = req.params.id
Question.deleteOne({ _id: id }, (err) => {  
if (err) {
    res.json({ msg: "Somthing went wrong!!" });
    console.log("err in delete  question by admin");
}
})
res.json({ msg: "yes deleted user by admin" })
};

/************** UPDATE (PUT) **************/
const updatequestion = async(req, res,next) => {
try {

await Question.findOneAndUpdate({ _id:req.params.id }, {
    _id: req.params.id,
    quizid: req.body.quizid,
questionId: req.body.questionId,
questionText: req.body.questionText,
answer: req.body.answer,
options: req.body.options
})
res.send('mise a jour effectué');
console.log('maj!!');

} catch (err) { console.log("Error:", err); }
}
/*
app.put('/update/:id', (req, res, next) => {
const question = new Question({
_id: req.params.id,
quizid: req.body.quizid,
questionId: req.body.questionId,
questionText: req.body.questionText,
answer: req.body.answer,
options: req.body.options
});
Question.updateOne({_id: req.params.id}, question).then(
() => {
res.status(201).json({
  message: 'Thing updated successfully!'
});
}
).catch(
(error) => {
res.status(400).json({
  error: error
});
}
);
});

*/

module.exports = {
    read,create,updatequestion,deletequestion
}