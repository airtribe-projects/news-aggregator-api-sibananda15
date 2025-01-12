const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new Error("Username and password required");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) throw new Error("Invalid username or password");
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error("Invalid username or password");
  
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token });
    } catch (err) {
      next(err);
    }
  };
