const express = require("express");
const { port, moviesKey } = require("./config");

const app = express();

const BASE_MOVIE_URL = "https://api.themoviedb.org/3";
const API_KEY_QUERY = `api_key=${moviesKey}`;
const ALL_MOVIES = `${BASE_MOVIE_URL}/discover/movie?${API_KEY_QUERY}`;

const getMovieUrlById = (id) =>
    `${BASE_MOVIE_URL}/movie/${id}?${API_KEY_QUERY}`;

const getPersonUrlById = (id) =>
    `${BASE_MOVIE_URL}/person/${id}?${API_KEY_QUERY}`;

app.use("/movies", (req, res) => {
    fetch(ALL_MOVIES)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log("Error");
            throw new Error("error");
        });
});

app.use("/movie/:id", (req, res) => {
    const { id } = req.params;
    fetch(getMovieUrlById(id))
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log("Error");
            throw new Error("error");
        });
});

app.use("/person/:id", (req, res) => {
    const { id } = req.params;
    fetch(getPersonUrlById(id))
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log("Error");
            throw new Error("error");
        });
});

const PORT = port || 3000;

app.listen(PORT, () => {
    console.log(`Server starting on port ${port} `);
});
