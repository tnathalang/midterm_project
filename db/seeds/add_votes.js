const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE votes_id_seq RESTART WITH 1'),
    knex('votes').del()
      .then(function () {
        return Promise.all([
          knex('votes').insert({ points: faker.random.number(), choice_id: 1 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 2 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 3 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 4 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 5 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 6 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 7 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 8 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 9 }),
          knex('votes').insert({ points: faker.random.number(), choice_id: 10 })
        ]);
      })

  ])
};
