var express =require('express');
var bodyparser=require('body-parser');
var app = express();
var urlencodedParser = bodyparser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index');
});
app.get('/contact',function(req,res){
    
    res.render('contact',{qs:req.query});
});
app.post('/contact', urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contact-success',{data:req.body})
});
// app.get('/profile/:id',function(req,res){
//     res.send('you request to see a profile with theid of'+req.params.id);
// });
app.get('/profile/:id',function(req,res){
    var data ={
        age:19,
        job:'developper',
        hobbies:['eating','fishing','programmimg']
    };
    res.render('profile',{person: req.params.id,data:data});
});
app.listen(3000);