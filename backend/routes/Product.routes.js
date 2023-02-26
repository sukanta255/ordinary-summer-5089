const express = require("express");
const { AddDataModel } = require("../model/DataAdd.model");
const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const { limit } = req.query;
  const { page } = req.query;
  try {
    console.log(req.query);
    const data = await AddDataModel.find(req.query)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await AddDataModel.count(req.query);
    res.send({ data, count });
  } catch (error) {
    res.send({ msg: "Unable to get Products", error }).sendStatus(403);
  }
});

ProductRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const data = new AddDataModel(payload);
    await data.save();
    console.log(data);
    res.send({ msg: "Product is Added" }).sendStatus(201);
  } catch (error) {
    res.sendStatus(403).send({ msg: "Unable to Add Products", error });
  }
});

ProductRouter.patch("/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    await AddDataModel.findByIdAndUpdate({ _id: id }, payload);
    res.send("Product Updated");
  } catch (err) {
    res.send({ msg: "Unable to Update", err }).sendStatus(403);
  }
});

ProductRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await AddDataModel.findByIdAndDelete({ _id: id });
    res.send("Product Deleted");
  } catch (err) {
    res.send({ msg: "Unable to Delete", err }).sendStatus(403);
  }
});

module.exports = {
  ProductRouter,
};
