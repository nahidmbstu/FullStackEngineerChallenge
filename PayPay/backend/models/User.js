const mongoose = require("mongoose");

// create a mongoose schema

const userSchema = new mongoose.Schema({
  name: String,
  designation: String,
  date: { type: Date, default: Date.now },
});

// create a model using schema

const User = mongoose.model("user", userSchema);

module.exports = User;
