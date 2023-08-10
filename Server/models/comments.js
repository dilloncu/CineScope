const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentsSchema = new Schema({
  name: String,
  comment: String,
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
