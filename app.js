var express = require('express')

var app = express();
var port = process.env.port || 8080;
var data = {"name": "John", "age": 31, "city": "New York"};

app.get('/',function(req,res){
    res.send(data);
});

app.get('/about',function(req,res){
    res.send('About Page');
});

app.get('/home',function(req,res){
    res.send('Home Page');
});

app.listen(port,function(err){
    if (err) throw err;
    console.log('Server is up and running on 8080')
});

