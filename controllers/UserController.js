const User = require("../models/user");

module.exports = {
  get: (req, res) => {
    res.json({ message: "this is a res from user /postt" });
  },
};
