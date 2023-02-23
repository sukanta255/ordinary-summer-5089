const express = require("express");
const { connection } = require("./config/db");
const { postRouter } = require("./routes/post");
const { userRouter } = require("./routes/user");
const { authenticator } = require("./middleware/authentication");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use(authenticator);
app.use("/posts", postRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log("error");
  }
  console.log(`server is running at port ${process.env.port}`);
});
