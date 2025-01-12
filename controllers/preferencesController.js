const Preference = require("../models/preferenceModel");

exports.savePreferences = async (req, res, next) => {
  try {
    const { username } = req.user;
    const preferences = req.body;

    await Preference.findOneAndUpdate(
      { username },
      { username, preferences },
      { upsert: true, new: true }
    );

    res.json({ message: "Preferences saved successfully" });
  } catch (err) {
    next(err);
  }
};