## my_node_chatroom

### 程序运行方法
- 在运行server的机器上面全局安装node、express、socket.io等；
- 将上面的zip解压到任意目录；
- cmd shell进入该目录，用"node server.js"运行server.js文件，启动本机的node服务器，在server.js文件中可设置端口；
- 用浏览器打开localhost:3000即可看到页面（默认端口为3000），可打开多个页面模拟多人聊天；

### 使用方法
- 左边上方显示当前在线人数；
- 关闭浏览器窗口即视为离线；
- 左边栏显示当前时刻在线用户列表，包含用户的名称，用户的头像为随机选取图案；
- 右边为具体聊天内容，可以包含文字、表情、图片等，可选取不同的文字颜色进行发送，点击清屏可以清除聊天记录；
- 右边右上角显示当前用户名称（即自己的昵称）；
- 左边在线用户列表可以点击选中，点击选中后背景变成深蓝色，消息只给被选中的用户发送；
- 如果选中“全体用户”，则每个用户均可收到当前用户发送的消息；

### 说明
- 本程序参考[这个](https://github.com/wayou/hichat)完成，加入了单聊功能；
- 界面截图如下：

![chatroom](https://raw.githubusercontent.com/changsiyuan/my_node_chatroom/master/www/images/chatroom.png)
