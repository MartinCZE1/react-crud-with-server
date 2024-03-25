const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  ram: { type: Number, required: true },
  cpu: { type: String, required: true },
  display: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Phones", schema);