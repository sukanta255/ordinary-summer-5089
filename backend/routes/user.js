const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../model/user");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.findOne({ email: payload.email });
    if (user) {
      return res.send({ msg: "Please login, user already exist" });
    } else {
      const hashPassword = await bcrypt.hashSync(payload.password, 8);
      payload.password = hashPassword;
      const newUser = new User(payload);
      await newUser.save();
      return res.json({ msg: "User registered.", user: newUser });
    }
  } catch (error) {
    res.send({ msg: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.findOne({ email: payload.email });
    if (!user) return res.send("Please signup first");
    const isPasswordCorrect = await bcrypt.compareSync(
      payload.password,
      user.password
    );
    if (isPasswordCorrect) {
      const token = await jwt.sign(
        { email: user.email, userId: user._id },
        process.env.key,
        { expiresIn: 60 * 60 }
      );
      res.json({ msg: "Login success", token });
    } else {
      res.send({ msg: "Invalid credentials" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = {
  userRouter,
};
