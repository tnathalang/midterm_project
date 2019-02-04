const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE choices_id_seq RESTART WITH 1'),
    knex('choices').del()
      .then(function () {
        return Promise.all([
          knex('choices').insert(
            {
              name_choice: faker.lorem.word(),
              description: faker.lorem.sentence()
            }),
          knex('choices').insert(
            {
              name_choice: faker.lorem.word(),
              description: faker.lorem.sentence()
            }),
          knex('choices').insert(
            {
              name_choice: faker.lorem.word(),
              description: faker.lorem.sentence()
            }),
        ]);
      })
  ])
};
