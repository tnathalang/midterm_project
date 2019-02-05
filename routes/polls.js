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
            .insert({
                name_poll: req.body.name,
                question: req.body.question,
                admin_id: req.body.admin_id
            })
            .then((results) => {
                res.json(results);
            })

    })


    // post for options at specific poll
    //going into options
    router.post('/:id', (req, res) => {
        knex("choices")

            .insert({
                name_choice: req.body.options,
                description: req.body.description,
                choice_number: req.body.choice_number,
                poll_id: req.params.id


            })
            .then((results) => {
                res.json(results);
            })


    })

    // get choices from db for specific polls

    router.get("/:id/choices", (req, res) => {
        knex
            .select("*")
            .from("choices")
            .innerJoin("polls", "polls.id", "choices.id")

            .where("polls.id", Number(req.params.id))
            .then((results) => {
                res.json(results);
                console.log
            })
            .catch((err) => {
                console.log(err)
            })
    })





    return router;
}
