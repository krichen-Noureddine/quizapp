var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose=require ('mongoose');
const quizrouter= require('./routers/routers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/',quizrouter)



const port=3000;
//connect to mongo 
mongoose.connect('mongodb://localhost:27017/quizapp');
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    
}).on('error', function(error){
    console.log('Connection error:', error);
});



 app.listen(port,()=> {

    console.log("app is running on port",port);
 })

