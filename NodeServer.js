var net = require('net');
var s = net.Server(function(socket){
var authdata;
socket.on('data',function(data){
var fs = require('fs');
var st = "" +data;
data = st.substring(0,st.length-1);
var good = true;
for(i = 0; i < data.length; i++)
{
if(data[i].charCodeAt(0)<48 ||data[i].charCodeAt(0)>57&& good == true)
   {
    console.log("Cracking attempt from: "+socket.remoteAddress+"\n");
    good = false;
    }
}
if(good == true){
fs.readFile('./'+data+'.lua', function (err, data) {
  socket.write(data+"\n",'ascii');
});
}
});
});
s.listen(10457);