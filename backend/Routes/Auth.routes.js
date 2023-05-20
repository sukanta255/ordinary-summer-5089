const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userModel = require("../model/User.model");
const AuthRouter = express.Router();

AuthRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new userModel({ ...req.body, password: hashedPassword });
    if (!user) {
      return res.status(400).send({ msg: "User Not Found" });
    }
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

AuthRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User Not Found, Please Sign Up...");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email, userId: user._id, admin: user.admin }, process.env["SECRET_KEY"]);
    return res.json({ msg: "Login success", token, user: user.firstname, admin: user.admin });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

AuthRouter.post("/admin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send("Admin Not Found, Please Reach Out to Officials");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email, userId: user._id, admin: true }, process.env["SECRET_KEY"]);
    return res.json({ msg: "Login success", token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ msg: "Server error" });
  }
});

module.exports = AuthRouter;
