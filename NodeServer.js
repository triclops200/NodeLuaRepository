var net = require('net');
var s = net.Server(function(socket){
var authdata;
socket.on('data',function(data){
var fs = require('fs');
var st = "" +data;
data = st.substring(0,st.length-1);
fs.readFile('./'+data+'.lua', function (err, data) {
  socket.write(data+"\n",'ascii');
});
});
});
s.listen(10457);