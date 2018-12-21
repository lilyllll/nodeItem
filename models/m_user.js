// 专门处理数据库操作的代码
// 数据库操作的结果 err data

// 引入数据库配置
const connection = require("../config/db_config");
// 检查邮箱
exports.checkEmail = (email, callback) => {
  const sqlstr = 'SELECT *FROM `users` WHERE email=?';
  connection.query(sqlstr, email, (err, data) => {
    // 在异步操作的位置  通过调用函数的方式  传递结果
    if(err) {
      return callback(err);
    }
    callback(null,data);
  })
}
