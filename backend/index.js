const express = require("express");
require("dotenv").config();

const cors = require("cors");
const userRouter = require("./Routes/Users.routes");
const ProductRouter = require("./Routes/Products.routes");
const authenticator = require("./middleware/Auth.middleware");
const connectDB = require("./Connection/connectDB");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/users", userRouter);
app.use("/products", ProductRouter);
app.use(authenticator);

app.listen(process.env.port, async () => {
  try {
    await connectDB;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running at ${process.env.port}`);
});
