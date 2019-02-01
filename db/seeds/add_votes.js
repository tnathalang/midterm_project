const faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('votes').del()
    .then(function () {
      return Promise.all([
        knex('votes').insert({id: 1, points: faker.random.number()}),
        knex('votes').insert({id: 2, points: faker.random.number()}),
        knex('votes').insert({id: 3, points: faker.random.number()})
      ]);
    });
};
