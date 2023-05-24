const express = require("express");
const cartRouter = express.Router();
const ProductModel = require("../model/Product.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cartProductModel = require("../model/CartProducts.model");
const cartModel = require("../model/Cart.model");

cartRouter.post("/", async (req, res) => {
  const { productId, quantity, size } = req.body;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
  if (!decoded) {
    return res.status(400).send({ msg: "Session End, Please Login Again" });
  }
  const { userId } = decoded;

  const product = await ProductModel.findById(productId);

  if (!product) {
    return res.status(404).send({ msg: "Product not found" });
  }

  const isCartProductPresent = await cartProductModel.findOne({ product: product._id });

  if (isCartProductPresent) {
    isCartProductPresent.quantity += quantity;
    await isCartProductPresent.save();
    return res.json({ msg: "Product Updated in cart" });
  }
  const cartProduct = new cartProductModel({
    product,
    quantity,
    size,
  });
  await cartProduct.save();

  const cart = await cartModel.findOne({ user: userId });
  if (!cart) {
    const newCart = new cartModel({
      user: userId,
      products: [cartProduct._id],
    });
    await newCart.save();
  } else {
    cart.products.push(cartProduct._id);
    await cart.save();
  }
  return res.json({ msg: "Product added to cart" });
});

cartRouter.patch("/:cartProductId", async (req, res) => {
  const { quantity, size } = req.body;
  const { cartProductId } = req.params;
  try {
    const cartProduct = await cartProductModel.findById(cartProductId);
    if (!cartProduct) {
      return res.status(400).send({ msg: "Cart Product not found" });
    }

    if (quantity) {
      cartProduct.quantity = quantity;
    }
    if (size) {
      cartProduct.size = size;
    }

    await cartProduct.save();
    res.json({ msg: "Cart Updated" });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

// GET all cart items for a user
cartRouter.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
    if (!decoded) {
      return res.status(400).send({ msg: "Session End, Please Login Again..." });
    }
    const { userId } = decoded;

    const cart = await cartModel.findOne({ user: userId }).populate({
      path: "products",
      populate: {
        path: "product",
        model: "products",
      },
    });

    if (!cart) {
      return res.status(400).send({ msg: "No Items in Cart" });
    }

    res.json(cart);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

cartRouter.delete("/:cartId/product/:productId", async (req, res) => {
  const { cartId, productId } = req.params;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env["SECRET_KEY"]);
  if (!decoded) {
    return res.status(400).send({ msg: "Session End, Please Login Again..." });
  }
  const { userId } = decoded;

  try {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      return res.status(400).send({ msg: "Cart not found" });
    }

    if (cart.user.toString() !== userId) {
      return res.status(400).send({ msg: "Unauthorized" });
    }

    const productIndex = cart.products.findIndex((cartProduct) => cartProduct.toString() === productId);

    if (productIndex === -1) {
      return res.status(400).send({ msg: "Product not found in cart" });
    }

    cart.products.splice(productIndex, 1);
    await cart.save();

    await cartProductModel.findByIdAndDelete(productId);

    res.send({ msg: "Product removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

module.exports = cartRouter;
