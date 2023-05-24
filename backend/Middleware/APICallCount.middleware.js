const fs = require("fs");
const APICallCounter = (req, res, next) => {
  try {
    let count = 0;
    fs.readFile("APICounts.txt", "utf-8", (error, data) => {
      if (error) {
        res.status(400).send({ msg: "Counter Error" });
      }
      count = +data;
    });
    count++;
    fs.writeFile("APICounts.txt", "" + count, (error) => {
      if (error) {
        res.status(400).send({ msg: "Counter Error" });
      }
      next();
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server error" });
  }
};

module.exports = APICallCounter;
