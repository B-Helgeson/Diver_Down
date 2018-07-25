const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certSchema = new Schema({
    certTitle: String, 
    certDate: { type: Date, default: Date.now },
    certAgency: String,
    certNumber: String, 
    certPicture: String, 
    certInstructor: { type: String, required: false }
});

const Cert = mongoose.model("Cert", certSchema);

module.exports = Cert;
