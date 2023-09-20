const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  hallId: {
    required: [true, "hall ID is mandatory"],
    type: String,
  },
  capacity: {
    required: true,
    type: Number,
  },
  amenities: {
    type: [String],
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
});

module.exports = mongoose.model("halls", hallSchema);
