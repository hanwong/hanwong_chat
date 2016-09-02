var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('port', 3030);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
 // console.log('a user connected');
 // socket.on('disconnect', function(){
 //   console.log('a user disconnected');
 // });
 socket.on('chat message',function(msg){
   io.emit('chat message', msg);
 });
});

http.listen(app.get('port'), function(){
  console.log('Express Server localhost: ' + app.get('port'));
});
