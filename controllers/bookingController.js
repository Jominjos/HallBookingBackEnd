const Booking = require("../models/booking");

module.exports = {
  get: (req, res, next) => {
    res.json({ message: "this is res from booking get" });
  },
  post: (req, res) => {
    res.json({ message: "booking post" });
  },
};
