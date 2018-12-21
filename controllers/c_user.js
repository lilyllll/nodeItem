// 导包
const M_user = require("../models/m_user.js");

// 渲染登录页面
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
  // 邮箱
  M_user.checkEmail(body.email,
    (err, data) => {
      // 使用err和data
      if (err) {
        throw err;
      }
      if (data.length === 0) {
        return res.send({
          code: 1,
          msg: "邮箱不存在"
        });
      }
      if (data[0].password !== body.password) {
        return res.send({
          code: 2,
          msg: "密码错误"
        })
      }
      // 存入数据
      req.session.user = data[0]
      
      console.log(req.session.user);
      res.send({
        code: 200,
        msg: "登录成功"
      })
    })
}