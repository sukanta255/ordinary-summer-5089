const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  size: {
    type: String,
    required: true,
    default: "sm",
  },
});

const cartProductModel = mongoose.model("cart_product", cartSchema);

module.exports = cartProductModel;
