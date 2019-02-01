"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

    router.post("/", (req, res) => {
        console.log("what is me: ", req.body)

    });

    return router;
}
