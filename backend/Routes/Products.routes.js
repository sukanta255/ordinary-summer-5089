const express = require("express");
const ProductModel = require("../model/Product.model");
const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const filter = req.query;
  try {
    const data = await ProductModel.find(filter);
    if (!data) {
      return res.status(401).send({ msg: "Data Related to Query, Not Found" });
    }
    res.json(data);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

ProductRouter.post("/", async (req, res) => {
  const doc = req.body;
  try {
    const data = new ProductModel(doc);
    if (!data) {
      return res.status(401).send({ msg: "Not Found" });
    }
    await data.save();
    res.json(data);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

ProductRouter.patch("/:id", async (req, res) => {
  const doc = req.body;
  const id = req.params["id"];
  try {
    const data = await ProductModel.findByIdAndUpdate({ _id: id }, doc);
    if (!data) {
      return res.status(401).send({ msg: "Not Found" });
    }
    res.json(data);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

ProductRouter.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  try {
    const data = await ProductModel.findByIdAndDelete({ _id: id });
    if (!data) {
      return res.status(401).send({ msg: "Not Found" });
    }
    res.json(data);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

module.exports = ProductRouter;
