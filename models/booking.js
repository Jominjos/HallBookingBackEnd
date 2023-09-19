const mongoose = require("mongoose");

// Define a schema for the booking
const bookingSchema = new mongoose.Schema({
  hallId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "halls", // Reference to the Room model
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Reference to the User model
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
