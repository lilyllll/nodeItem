// 路由模块

const express = require("express");

const router = express();

const c_user = require("./controllers/c_user.js");
const c_topic = require("./controllers/c_topic");
router
  .get("/signin", c_user.showSignin)
  .post("/signin", c_user.handleSignin)
  .get("/",c_topic.showTopicList)
  .get("/topic/create",c_topic.createTopic)
  .post("/topic/create",c_topic.handleCreateTopic)
module.exports = router;