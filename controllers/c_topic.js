const M_topic = require("../models/m_topic");
const moment = require("moment");
// 渲染列表页面
exports.showTopicList = (req, res) => {
  M_topic.findAllTopics((err, data) => {
    if (err) {
      throw err;
    }
    res.render('index.html', {
      topics: data,
      user: req.session.user
    });
  })
}


exports.createTopic = (req, res) => {
  res.render("topic/create.html");
}

exports.handleCreateTopic = (req, res) => {
  const body = req.body;
  body.userId = req.session.user.id;
  body.createdAt = moment().format();
  M_topic.addTopic(body, (err, data) => {
    if(err) {
      return res.send({
        code: 500,
        msg: "坏菜了"
      })
    }
    res.send({
      code: 200,
      msg: "添加成功"
    })
  })
}