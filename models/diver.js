const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diverSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, requried: true},
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
  dateCreated: { type: Date, default: Date.now },
  certs: [{
    type: Schema.Types.ObjectId,
    ref: "Cert"
    }],
  logs: [{
    type: Schema.Types.ObjectId,
    ref: "Log"
    }],
  buddies: {
    type: String,
    }
});

const Diver = mongoose.model("Diver", diverSchema);

module.exports = Diver;
