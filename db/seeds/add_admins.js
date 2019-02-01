const faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('midterm')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('midterm').where({id: 1}).update(
          {
          email: faker.internet.email(),
          }),
        knex('midterm').where({id: 2}).update(
          {
          email: faker.internet.email(),
          }),
        knex('midterm').where({id: 3}).update(
          {
          email: faker.internet.email(),
          })
      ]);
    });
};
