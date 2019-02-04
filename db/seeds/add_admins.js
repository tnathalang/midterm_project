const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE admins_id_seq RESTART WITH 1'),
    knex('admins').del()
      .then(function () {
        return Promise.all([
          knex('admins').insert({ email: "poggers@email.c" }),
          knex('admins').insert({ email: faker.internet.email() }),
          knex('admins').insert({ email: faker.internet.email() })
        ]);
      })
  ])
};
