var mongoose = require('mongoose')
var Schema =mongoose.Schema;
var questionSchema = mongoose.Schema({
    quizid: Schema.Types.ObjectId,
          
    questionId: Schema.Types.ObjectId,
   
    questionText:{
        type: String, 
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options:{
        type  :Array,
        default:[]
    }
})
module.exports = mongoose.model('quiz',questionSchema)