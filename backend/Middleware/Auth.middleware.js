const jwt = require("jsonwebtoken");

require("dotenv").config();

const authenticator = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Not authorized!" });
    }

    const decodedToken = await jwt.verify(token, process.env["SECRET_KEY"]);
    if (!decodedToken) {
      return res.status(401).json({ message: "Not authorized!" });
    }
    req.body.userId = decodedToken.userId;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = authenticator;
