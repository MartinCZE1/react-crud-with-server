const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  isic: { type: Number, required: true },
  classroom: { type: String, required: true },
});

module.exports = mongoose.model("Student", schema);