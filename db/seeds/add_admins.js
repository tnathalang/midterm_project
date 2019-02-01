const faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('admins').del()
    .then(function () {
      return Promise.all([
        knex('admins').insert({id: 1, email: faker.internet.email()}),
        knex('admins').insert({id: 2, email: faker.internet.email()}),
        knex('admins').insert({id: 3, email: faker.internet.email()})
      ]);
    });
};
