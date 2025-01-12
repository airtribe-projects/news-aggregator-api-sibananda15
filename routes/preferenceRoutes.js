const express = require("express");
const { savePreferences } = require("../controllers/preferencesController");
const { validatePreferences } = require("../middlewares/validationMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, validatePreferences, savePreferences);

module.exports = router;