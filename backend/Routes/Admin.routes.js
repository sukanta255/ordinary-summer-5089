const cartProductModel = require("../model/CartProducts.model");
const ProductModel = require("../model/Product.model");
const UserModel = require("../model/User.model");
const fs = require("fs");

const AdminRouter = require("express").Router();

AdminRouter.post("/analytics", async (req, res) => {
  const { userQuery, productQuery } = req.body;
  try {
    const users = await UserModel.find(userQuery ? userQuery : {});
    const products = await ProductModel.find(productQuery ? productQuery : {});
    const cartProducts = await cartProductModel.find({}).populate("product");
    let APICounts;
    fs.readFile("APICounts.txt", "utf-8", (error, data) => {
      if (error) {
        res.status(400).send({ msg: "Counter Error" });
      }
      APICounts = +data;
    });
    res.json({ users, products, cartProducts, APICounts });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

module.exports = AdminRouter;
