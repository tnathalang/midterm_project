const faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('votes').del()
    .then(function () {
      return Promise.all([
        knex('votes').insert({points: faker.random.number()}),
        knex('votes').insert({points: faker.random.number()}),
        knex('votes').insert({points: faker.random.number()})
      ]);
    });
};
