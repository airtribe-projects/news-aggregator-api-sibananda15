const axios = require("axios");
const Preference = require("../models/preferenceModel");

exports.fetchNews = async (req, res, next) => {
  try {
    const { category } = req.query;
    const { username } = req.user;
    const userPreferences = await Preference.findOne({ username });
    const apiKey = process.env.NEWS_API_KEY;

    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        category: category || userPreferences?.preferences?.category || "general",
        apiKey,
      },
    });

    res.json(response.data);
  } catch (err) {
    next(err);
  }
};