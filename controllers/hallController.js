const Hall = require("../models/hall");

module.exports = {
  get: async (req, res) => {
    try {
      const dbdata = await Hall.find({}).populate("Bookings");

      res.json(dbdata);
    } catch (error) {
      res.json({ message: "error " });
    }
  },

  post: async (req, res) => {
    let halldetail = req.body;

    const dbdata = await Hall.create(halldetail);
    console.log(dbdata);
    res.json(dbdata);
  },
};
