const express = require("express");
const cartRouter = express.Router();
const ProductModel = require("../model/Product.model");
const cartProductModel = require("../model/CartProducts.model");
const cartModel = require("../model/Cart.model");

cartRouter.post("/:userId", async (req, res) => {
  const { productId, quantity, size } = req.body;
  const { userId } = req.params;

  const product = await ProductModel.findById(productId);
  if (!product) {
    return res.status(404).send({ msg: "Product not found" });
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

  res.json({ msg: "Product added to cart" });
});

cartRouter.patch("/:cartProductId/:userId", async (req, res) => {
  const { quantity, size } = req.body;
  const { cartProductId } = req.params;

  const cart = await cartModel.findOne({ user: userId });
  if (!cart) {
    return res.status(404).send({ msg: "Cart not found" });
  }

  const cartProductIndex = cart.products.findIndex((cp) => cp._id.toString() === cartProductId);
  if (cartProductIndex === -1) {
    return res.status(404).send({ msg: "Product not found in cart" });
  }

  if (quantity) {
    cart.products[cartProductIndex].quantity = quantity;
  }
  if (size) {
    cart.products[cartProductIndex].size = size;
  }

  await cart.save();
  res.json({ msg: "Cart updated" });
});

// GET all cart items for a user
cartRouter.get("/", async (req, res) => {
  const { user } = req.query;
  try {
    const cart = await cartModel.findOne({ user }).populate("products");

    if (!cart) {
      return res.status(404).send({ msg: "Cart not found" });
    }

    res.json(cart.products);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server error" });
  }
});

cartRouter.delete("/:cartId/product/:productId", async (req, res) => {
  const { cartId, productId } = req.params;
  const { userId } = req.body;

  try {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      return res.status(404).send({ msg: "Cart not found" });
    }

    // Check if the user owns the cart
    if (cart.user.toString() !== userId) {
      return res.status(403).send({ msg: "Unauthorized" });
    }

    // Find the index of the product in the cart
    const productIndex = cart.products.findIndex((p) => p.product.toString() === productId);

    if (productIndex === -1) {
      return res.status(404).send({ msg: "Product not found in cart" });
    }

    // Remove the product from the cart
    cart.products.splice(productIndex, 1);
    await cart.save();

    res.send({ msg: "Product removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

module.exports = cartRouter;
