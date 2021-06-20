const mongoose = require("mongoose");

// create a mongoose schema

const postSchema = new mongoose.Schema({
  emp_name: String,
  reviewer: String,
  review_details: String,
  date: { type: Date, default: Date.now },
  submited: Boolean,
});

// create a model using schema

const Post = mongoose.model("post", postSchema);

module.exports = Post;
