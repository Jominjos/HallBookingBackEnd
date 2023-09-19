const Booking = require("../models/booking");
const User = require("../models/user");
const Hall = require("../models/hall");
module.exports = {
  get: async (req, res, next) => {
    const dbdata = await Booking.find({}).populate("user").populate("hallId");
    res.json(dbdata);
  },
  post: async (req, res) => {
    const bookingData = req.body;
    const userId = await User.find({ username: bookingData.user }, { _id: 1 });
    const userid = userId[0]._id;
    const roomId = await Hall.find({ hallId: bookingData.hallId }, { _id: 1 });
    const roomid = roomId[0]._id;
    console.log(roomid);

    const bookingdata = {
      hallId: roomid,
      user: userid,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
    };

    const dbdata = await Booking.create(bookingdata);
    res.json(dbdata);
  },
};
