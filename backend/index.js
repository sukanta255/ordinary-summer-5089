const express = require("express");
require("dotenv").config();

const cors = require("cors");
const ProductRouter = require("./Routes/Products.routes");
const authenticator = require("./Middleware/Auth.middleware");
const connectDB = require("./Connection/connectDB");
const AuthRouter = require("./Routes/Auth.routes");
const userRouter = require("./Routes/User.routes");
const cartRouter = require("./Routes/Cart.routes");
const APICallCounter = require("./Middleware/APICallCount.middleware");
const AdminRouter = require("./Routes/Admin.routes");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/users", APICallCounter, AuthRouter);
app.use("/products", APICallCounter, ProductRouter);
app.use("/cart", APICallCounter, cartRouter);

app.use("/admin", authenticator, AdminRouter);
app.use("/user", authenticator, userRouter);

app.listen(process.env.port, async () => {
  try {
    await connectDB;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running at ${process.env.port}`);
});
