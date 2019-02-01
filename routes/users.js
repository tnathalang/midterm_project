"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/admins', (req, res) => {
    knex
      .select("*")
      .from("admins")
      .where("email", "poggers@email.c")
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}
