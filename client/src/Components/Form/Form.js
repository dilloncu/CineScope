import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import searchIcon from "./icons/Search.png";
import starIcon from "./icons/star.png";

export default function Form({
  movieData,
  handleInputChange,
  handleSubmit,
  movieTitle,
  playerData,
}) {
  return (
    <div>
      <form>
        <input
          className="tab"
          placeholder="search movies"
          type="text"
          onChange={handleInputChange}
        ></input>
        <button className="button" onClick={handleSubmit}>
          <img className="icon" src={searchIcon} alt="submit" />
        </button>
      </form>

      <div>
        <div className="data">
          <div className="block">
            <h2> {movieData.Title} </h2>
            <div className="GRR">
              <p className="num"> {movieData.Genre}</p>
              <p className="num">{movieData.Runtime}</p>
              <p className="num">{movieData.Released}</p>
            </div>
            <div className="DA">
              <p>
                <span className="director"></span> {movieData.Director}
              </p>
              <p>
                <span className="actor"></span> {movieData.Actors}
              </p>
            </div>
            <p className="plot">{movieData.Plot}</p>

            <div className="rating">
              <img className="star" src={starIcon} alt="star" />
              <p>{movieData.imdbRating}</p>
            </div>
            <div className="video-container">
              {movieTitle ? (
                <iframe
                  className="video"
                  title={movieData.Title}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${playerData}`}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <img
            className="poster"
            src={movieData.Poster}
            alt={movieData.Title}
          ></img>
        </div>
        <div className="imgcontainer">
          <div className="overlay"></div>
          <img
            className="bgimg"
            src={movieData.Poster}
            alt={movieData.Title}
          ></img>
        </div>
      </div>
    </div>
  );
}
