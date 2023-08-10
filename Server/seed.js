const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_KEY);
const Comments = require("./models/comments");

async function seed() {
  await Comments.create({
    name: "Kumail",
    comment: "good movie",
  });

  console.log("Created a new movie");
  mongoose.disconnect();
}

seed();
