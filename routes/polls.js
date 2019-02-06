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
            .returning('id')
            .insert({
                name_poll: req.body.name_poll,
                question: req.body.question,
                admin_id: req.body.admin_id
            })
            // .then((id) => {
            //     knex('choices')
            //         .insert(req.body.choices)

            // })
            .then(results => {
                res.json({ id: results[0] })
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

    function generateRandomString() {

        return Math.random().toString(36).substr(2, 7)
    }


    router.post("/:id/publish", (req, res) => {
        const key = generateRandomString()
        console.log("string ============================", "updating with key")
        knex('polls')
            .where('polls.id', "=", req.params.id)
            .update({
                published: true,
                key: key
            })
            .then((results) => {
                console.log("successful", results)
                res.json({
                    url: `/polls/${key}/vote`
                })
            })
    })





    return router;
}
