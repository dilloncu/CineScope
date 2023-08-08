const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
const axios = require("axios");
const { request } = require("http");
require("dotenv").config();
const PORT = process.env.PORT || 9010;
const app = express();
app.use(cors());
app.use(bp.json());
// Create an endpoint to the root route

// const Books = require("./models/Books");

// mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("can I be heard?");
});

app.get("/movies", async (request, response) => {
  const movieTitle = request.query.title;
  const API = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieTitle}`;

  const res = await axios.get(API);
  response.status(200).json(res.data);
  console.log("movies server awake and runing");
});

app.get("/videos", async (request, response) => {
  const movieTitle = request.query.title;
  const API2 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movieTitle}|trailer&key=${process.env.YOUTUBE_KEY}`;
  const res = await axios.get(API2);
  response.status(200).json(res.data.items[0].id.videoId);
  console.log("Video is working");
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
