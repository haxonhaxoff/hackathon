var socket = io();
function randomString(len) {
    charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}
var roomId = randomString(5);
socket.emit("new connection", {room : roomId});

$(document).ready(function(){
    document.getElementById('room-code').innerText = roomId;
});