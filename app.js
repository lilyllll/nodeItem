// 一、入口文件
const express = require('express');
const router = require('./router');

// 二、配置实例化app
const app = express();


// 统一处理资源
app.use("/public",express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));

app.engine('html', require('express-art-template'));


// 三、挂起路由
app.use(router);


// 四、监听端口
app.listen('8000', () => {
  console.log("监听到8000端口------");
})