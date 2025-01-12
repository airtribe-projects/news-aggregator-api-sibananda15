const express = require("express");
const { fetchNews } = require("../controllers/newsController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, fetchNews);

module.exports = router;