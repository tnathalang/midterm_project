const faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('admins').del()
    .then(function () {
      return Promise.all([
        knex('admins').insert({email: "poggers@email.c"}),
        knex('admins').insert({email: faker.internet.email()}),
        knex('admins').insert({email: faker.internet.email()})
      ]);
    });
};
