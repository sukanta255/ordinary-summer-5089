const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  badgeType: {
    type: String,
    default: "new",
  },
  isMale: {
    type: Boolean,
    required: true,
  },
  reducedPrice: {
    type: String,
    default: "",
  },
  hasMultiplePrices: {
    type: Boolean,
    default: false,
  },
  isOutlet: {
    type: Boolean,
    default: false,
  },
  isSellingFast: {
    type: Boolean,
    default: false,
  },
  colour: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  mainCategory: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  productRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  productDescription: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
