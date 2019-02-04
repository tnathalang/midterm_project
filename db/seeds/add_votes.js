const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE votes_id_seq RESTART WITH 1'),
    knex('votes').del()
      .then(function () {
        return Promise.all([
          knex('votes').insert({ points: faker.random.number() }),
          knex('votes').insert({ points: faker.random.number() }),
          knex('votes').insert({ points: faker.random.number() })
        ]);
      })

  ])
};
