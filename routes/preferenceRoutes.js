const express = require("express");
const { savePreferences } = require("../controllers/preferencesController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, savePreferences);

module.exports = router;