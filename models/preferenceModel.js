
const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
  username: { type: String, required: true },
  preferences: { type: Object, required: true },
});

module.exports = mongoose.model("Preference", preferenceSchema);