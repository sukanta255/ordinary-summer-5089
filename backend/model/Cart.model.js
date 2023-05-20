const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: ObjectId,
      ref: "cart_products",
      required: true,
    },
  ],
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
