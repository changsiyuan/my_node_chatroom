var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = [];  //users list
    userSockets = {};  //all the sockets

//the directory of the html page
app.use('/', express.static(__dirname + '/www'));

//bind the server to the 80 port(3000 for local test)
server.listen(process.env.PORT || 3000);

//server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);  //publish to openshift
//console.log('server started on port'+process.env.PORT || 3000);

//handle the socket
io.sockets.on('connection', function(socket) {
    //new user login
    socket.on('login', function(nickname) {
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted');
        } else {
            socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            userSockets[nickname] = socket;
            socket.emit('loginSuccess',users);
            io.sockets.emit('system', nickname, users, 'login');
        };
    });
    //user leaves
    socket.on('disconnect', function() {
        // users.splice(socket.userIndex, 1);
        users.splice(users.indexOf(socket.nickname), 1);
        delete userSockets[socket.nickname];
        socket.broadcast.emit('system', socket.nickname, users, 'logout');
    });
    //new message get
    socket.on('postMsg', function(msg, color,sendTo) {
        if(sendTo=="全体用户"){
            //发送给全体用户
            socket.broadcast.emit('newMsg', socket.nickname, msg, color);
        }else{
            //发送给特定用户
            userSockets[sendTo].emit('newMsg', socket.nickname, msg, color);
        }
    });
    //new image get
    socket.on('img', function(imgData, color) {
        socket.broadcast.emit('newImg', socket.nickname, imgData, color);
    });
});