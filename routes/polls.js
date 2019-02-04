"use strict";


const express = require('express');
const router = express.Router();

module.exports = (knex) => {

    router.get("/", (req, res) => {
        knex
            .select("*")
            .from("polls")
            .then((results) => {
                res.json(results);
            })
            .catch((err) => {
                console.log("Error")
            })

    })
    // get specific poll
    router.get("/:id", (req, res) => {
        knex
            .select("*")
            .from("polls")
            .where("polls.id", "=", req.params.id)
            .then((results) => {
                res.json(results);
            })
            .catch((err) => {
                console.log("Error")
            })

    })

    //post for poll "/" create a new
    router.post('/', (req, res) => {
        knex("polls")
            .insert({ email: req.body.email })
            .then((results) => {
                res.json(results);
            })

    })


    // post for options at specific poll
    router.post('/:id', (req, res) => {
        knex("polls")
            .where("polls.id", "=", req.params.id)
            .insert({ question: req.body.question })
            .then((results) => {
                res.json(results);
            })


    })

    // get choices from db for specific polls

    router.get("/:id/choices", (req, res) => {
        knex
            .select("*")
            .from("choices")
            .innerJoin("polls", "choices.id", '=', "polls.id")
            //.where() poll id is this specific poll id
            .where("polls.id", "=", req.params.id)
            .then((results) => {
                res.json(results);
            })
            .catch((err) => {
                console.log("Error")
            })
    })





    return router;
}
