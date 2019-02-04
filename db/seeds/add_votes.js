const faker = require('faker')

exports.seed = function (knex, Promise) {
  knex.raw('ALTER TABLE votes AUTO_INCREMENT = 1')
  return knex('votes').del()
    .then(function () {
      return Promise.all([
        knex('votes').insert({ points: faker.random.number() }),
        knex('votes').insert({ points: faker.random.number() }),
        knex('votes').insert({ points: faker.random.number() })
      ]);
    });
};
