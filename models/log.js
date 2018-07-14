const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  diver: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  startDate: { type: Date, default: Date.now },
  sections: [{
    depth: String,
    time: String,
    type: String
     }]
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
