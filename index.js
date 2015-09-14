var express = require('express');
var ejs = require("ejs");

var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
var methodOverride = require('method-override');

var app = express();

app.use(urlencodedBodyParser);
app.use(methodOverride('_method'));
app.use(express.static('public'));


app.set('view engine', 'ejs');

app.listen(3000, function(){
	console.log("listening");
});


app.get('/', function(req, res){
    res.render("index.html.ejs");
});


