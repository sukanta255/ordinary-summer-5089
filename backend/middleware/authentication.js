const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticator = async (req, res, next) => {
  try {
    let token = req?.headers?.authorization;
    if (!token) {
      return res.status(401).json({ message: "Not authorized!" });
    }
    token = req.headers.authorization;
    const isTokenValid = await jwt.verify(token, process.env.key);
    if (!isTokenValid) {
      return res.status(401).json({ message: "Not authorized!" });
    }
    req.body.userId = isTokenValid.userId;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Something went wrong, please try again.",
        error: error.message,
      });
  }
};
module.exports = {
  authenticator,
};
