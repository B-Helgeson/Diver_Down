const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diverSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
  dateCreated: { type: Date, default: Date.now },
  certifications: [{
    certTitle: String, 
    certDate: { type: Date, default: Date.now },
    certAgency: String,
    certNumber: String, 
    certPicture: String, 
    certInstructor: { type: String, required: false }
    }],
    // The section below should associate the diver to his/her logs
  logs: [{
    type: Schema.Types.ObjectId,
    ref: "Log"
    }],
    // The section below should associate the diver to his/her dive buddies
  buddies: [{
      type: Schema.Types.ObjectId,
      ref: "Diver"
    }]
});

const Diver = mongoose.model("Diver", diverSchema);

module.exports = Diver;
