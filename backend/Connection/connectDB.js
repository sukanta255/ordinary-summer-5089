const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("dotenv").config();

const connectDB = mongoose.connect(process.env["mongoURL"]);

module.exports = connectDB;
