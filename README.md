# Chat with Node.js and Socket.io

Example of building a chatroom with Node.JS + Socket.io. This follows the example on [socket.io](http://socket.io/get-started/chat/) to the book. We setup an express app and require http (used by socket.io) and obviously socket.io

```javascript
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
```

The io object can listen for connections

```javascript
io.on("connection", callback);
```
Anytime a connection is initiated (a client opens the webpage) a socket object is created, which is personal to each connection, and that object is passed to the callback. The callback is fired when a client connect. The connection is initiated from the client side javascript through the client part of [socket.io.js](https://cdn.socket.io/socket.io-1.3.5.js). You can either load it through a cdn or locally serve it. The client side code to initiate the connection is

```javascript
var socket = io();
```

The most important functions of the socket object on both the client and server side is that it can listen for and emit events, and handle them asynchronously with callbacks. To setup the chat we simply need to emit an event (we call it 'chat message', but the name is arbitrary) on the client, which posts the message

```javascript
$("#send").on("click", function(event){
  var msg = $('#m').val();
  socket.emit('chat message', msg);
  $('#m').val('');
});
```

This emit event is captured on the server through

```javascript
socket.on('chat message', function(msg) {
  socket.broadcast.emit('chat message', msg);
});
```

The call back gets the value of the message and broadcasts it to everyone else. In order to display it on the client side we need to listen for that event

```javascript
socket.on('chat message', function(msg) {
  $("#messages").append($("<li>").text(msg));
});
```

and upon capture we append it to the DOM. The example can can be found at our [repo](https://github.com/Ashley-Peter-Awesome-Chat-App/chat-it-up).




