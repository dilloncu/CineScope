const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentsSchema = new Schema({
  id: String,
  tiltle: String,
  year: Number,
  comment: String
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
