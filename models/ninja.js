const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
"geometry": {
  "type": "Point",
  "coordinates": [125.6, 10.1]
}
*/

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    default: "Point",
    type: String,
  },
  coordinates: {
    type: [Number],
    index: "2dsphere", // the type of map we want to use.
  },
});

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
  geometry: GeoSchema,
});

// the model
// collection is called "ninjas" (similar to a table in SQL)
const Ninja = mongoose.model("ninja", NinjaSchema);

// export for use in other modules (files).
module.exports = Ninja;
