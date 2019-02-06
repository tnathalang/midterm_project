"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const pollsRoutes = require('./routes/polls')

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded"
  })
);
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use('/api/polls', pollsRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/polls/:key/vote', (req, res) => {
  knex
    .select("*")
    .from("polls")
    .where("polls.key", "=", req.params.key)
    .then((results) => {
      knex
        .select("*")
        .from("choices")
        .where("poll_id", "=", results[0].id)
        .then((choiceResults) => {
          res.render("vote", {
            poll: results,
            choices: choiceResults
          });
        })
    })
})
app.get('/polls/:key/final', (req, res) => {
  knex

    // .select("name_choice", "choices_votes.vote_id", "choices.poll_id", "polls.key")
    .select('*')

    .from('polls')
    .innerJoin('choices', 'choices.poll_id', 'polls.id')
    .where('key', req.params.key)
    .then((results) => {
      const templateVar = {
        result: results
      }
      console.log(templateVar)
      res.render('final', templateVar)
    })




})

app.post('/polls/:id/votes', (req, res) => {
  const results = req.body.votes.map(voteObj => ({ choice_id: Number(voteObj.choice_id), vote_id: Number(voteObj.vote_id) }))
  const pollId = req.params.id;
  console.log("inserting votes")
  knex('choices_votes')
    .insert(results)
    .then(function (result) {
      console.log(`/polls/${pollId}/final`)
      res.redirect(`/polls/${pollId}/final`)
    })

})



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
``
