const User = require("../models/user");

module.exports = {
  get: async (req, res) => {
    const dbdata = await User.find({});
    res.json(dbdata);
  },

  post: async (req, res) => {
    let userDetail = req.body;
    const dbdata = await User.create(userDetail);
    res.json(dbdata);
  },
};
