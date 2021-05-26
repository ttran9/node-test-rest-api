const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  // add in geolocation
});

// the model
// collection is called "ninjas" (similar to a table in SQL)
const Ninja = mongoose.model("ninja", NinjaSchema);

// export for use in other modules (files).
module.exports = Ninja;
