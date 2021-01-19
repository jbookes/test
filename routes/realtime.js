const express = require("express");
const testTest = require("../api/realtime");
const router = express.Router();

// 실시간 현황
router.get("/", testTest.test);

module.exports = router;
