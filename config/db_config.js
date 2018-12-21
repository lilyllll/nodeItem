// 配置数据库
const mysql = require('mysql');
// 配置
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node_item'
});
// 开启连接
connection.connect();
module.exports = connection;