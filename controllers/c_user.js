// 导包
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

exports.showSignin = (req, res) => {
  res.render("signin.html")
}
// 处理登录请求
exports.handleSignin = (req, res) => {
  // 1获取表单数据
  // 2验证邮箱
  // 3验证密码
  // 4返回状态码
  const body = req.body;
  console.log(body);
  // 安装mysql 配置
  const sqlstr = 'SELECT * FROM `users` WHERE email=?';
  connection.query(sqlstr, body.email,(err, data) => {
    
    if(err) {
      throw err;
    }
    if(data.length === 0) {
    return res.send({
        code: 1,
        msg: "邮箱不存在"
      });
    }
    if(data[0].password !== body.password) {
      return res.send({
        code: 2,
        msg: "密码错误"
      })
    }

    res.send({
      code: 200,
      msg: "登录成功"
    })
  })

}