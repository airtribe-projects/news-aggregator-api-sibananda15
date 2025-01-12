require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
const preferenceRoutes = require("./routes/preferenceRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

dbConnect();

// Routes
app.use("/auth", authRoutes);
app.use("/news", newsRoutes);
app.use("/preferences", preferenceRoutes);
// Centralized Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


