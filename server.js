var express = require('express');
var app = express();

var expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs.engine({exitname: 'hbs',defaultLayout:'',layoutDir:''}));
app.set('view engine','.hbs');
app.get('/', function(req, res){
    res.send('hello world');
})

app.get('/handlebars', function(req, res){
    res.render('index');
})
app.listen(process.env.PORT || '3000')