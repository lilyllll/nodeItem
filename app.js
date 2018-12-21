// 一、入口文件
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
// express-mysql-sessiion 配置
var MySQLStore = require('express-mysql-session')(session);
var options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'node_item'
};

var sessionStore = new MySQLStore(options);
// 二、配置实例化app
const app = express();

app.use("/public",express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// express-mysql-sessiion 配置
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

// 三、挂起路由
app.use(router);


// 四、监听端口
app.listen('8000', () => {
  console.log("监听到8000端口------");
})