const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  diver: { type: String, required: true },
  title: String,
  location: {
    locName: String,
    latitude: Number, 
    longitude: Number, 
      },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  sections: [{
    depth: String,
    time: String,
    type: String
     }],
  startPressure: { type: Number, required: false },
  endPressure: { type: Number, required: false },
  visibility: { type: Number, required: false },
  current: { type: String, required: false },
  airType: { type: String, required: false },
  tankType: { type: String, required: false },
  waterTemp: { type: Number, required: false },
  surfaceTemp: { type: Number, required: false },
  weightUsed: { type: Number, required: false },
  wetSuitInfo: {
    suitType: String,
    suitThickness: Number, 
      },
  Equipment: [],
  diveBuddies: [],
  diveMaster: { type: String, required: false },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
