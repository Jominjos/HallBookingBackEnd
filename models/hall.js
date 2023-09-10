const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
  name: {
    required: true,
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
});

module.exports = mongoose.model("halls", hallSchema);
