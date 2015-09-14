/*global require*/

var express = require('express');
var ejs = require("ejs");

var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
var methodOverride = require('method-override');


var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(urlencodedBodyParser);
app.use(methodOverride('_method'));
app.use(express.static('public'));


app.set('view engine', 'ejs');




app.get('/', function(req, res){
    res.render("index.html.ejs");
});

io.on("connection", function(socket) {
    console.log("User Connected");
    socket.on("disconnect", function() {
        console.log("user disconnected");
    });

    socket.on('chat message', function(msg) {
        console.log(msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
