const userRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../model/User.model");

userRouter.get("/", async (req, res) => {
  try {
    const token = req.header.authorization;
    const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
    if (!decoded.admin) {
      return res.status(401).send({ msg: "User Not Allowed" });
    }
    const data = await UserModel.find(req.query);
    if (data.length === 0) {
      return res.status(401).send({ msg: "No Users Found" });
    }
    res.json(data);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const token = req.header.authorization;
    const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
    if (!decoded.admin) {
      return res.status(401).send({ msg: "User Not Allowed" });
    }
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

userRouter.patch("/:userId", async (req, res) => {
  try {
    const token = req.header.authorization;
    const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
    if (!decoded.admin) {
      return res.status(401).send({ msg: "User Not Allowed" });
    }
    const userId = req.params.userId;
    const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send({ msg: "User Not Found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

userRouter.delete("/:userId", async (req, res) => {
  try {
    const token = req.header.authorization;
    const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
    if (!decoded.admin) {
      return res.status(401).send({ msg: "User Not Allowed" });
    }
    const userId = req.params.userId;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send({ msg: "User Not Found" });
    }
    res.json(deletedUser);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});


module.exports = userRouter;
