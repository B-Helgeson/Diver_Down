const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diverSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Diver = mongoose.model("Diver", diverSchema);

module.exports = Diver;
