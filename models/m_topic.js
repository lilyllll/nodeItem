
const connection = require("../config/db_config");

exports.findAllTopics = (callback) => {
  const sqlstr = 'SELECT * FROM `topics` ORDER BY id DESC';
  connection.query(sqlstr, (err, data) => {
    if(err) {
      return callback(err);
    }
    callback(null,data);
  })
}

// 添加文章
exports.addTopic = (body, callback) => {
  const sqlstr = 'INSERT INTO `topics` SET ?';
  connection.query(sqlstr, body, (err, data) => {
    if(err) {
     return callback(err);
    }
    callback(null, data);
  })
}