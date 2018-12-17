// 路由模块

const express = require("express");

const router = express();

const c_user = require("./controllers/c_user.js");

router.get("/signin", c_user.showSignin);

module.exports = router;