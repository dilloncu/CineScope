const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
const axios = require("axios");
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
    console.log('movies server awake and runing')
})


app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
