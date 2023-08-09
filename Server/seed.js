const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_KEY);
const Comments = require("./models/comments");

async function seed() {
  await Comments.create({
    id: "23222332iiiiii",
    tiltle: "just a try",
    year: 2014,
    comment: "good movie",
  });

  console.log("Created a new movie");
  mongoose.disconnect();
}

seed();
