const express = require("express");
require("dotenv").config();

const cors = require("cors");
const ProductRouter = require("./Routes/Products.routes");
const authenticator = require("./middleware/Auth.middleware");
const connectDB = require("./Connection/connectDB");
const AuthRouter = require("./Routes/Auth.routes");
const userRouter = require("./Routes/User.routes");
const cartRouter = require("./Routes/Cart.routes");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/users", AuthRouter);
app.use("/products", ProductRouter);
app.use("/cart", cartRouter);

app.use(authenticator);
app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connectDB;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running at ${process.env.port}`);
});
