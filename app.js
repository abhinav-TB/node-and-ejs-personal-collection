var express =require('express');
var app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html');
});
app.get('/contact',function(req,res){
    res.sendfile(__dirname+'/contact.html');
});
app.get('/profile/:id',function(req,res){
    res.send('you request to see a profile with theid of'+req.params.id)
});;
app.listen(3000);