const faker = require('faker')

exports.seed = function (knex, Promise) {
  knex.raw('ALTER TABLE polls AUTO_INCREMENT = 1')
  return knex('polls').del()
    .then(function () {
      return Promise.all([
        knex('polls').insert(
          {
            name_poll: faker.lorem.word(),
            question: faker.lorem.word(),
            admin_link: faker.internet.url(),
            submit_link: faker.internet.url(),
          }),
        knex('polls').insert(
          {
            name_poll: faker.lorem.word(),
            question: faker.lorem.word(),
            admin_link: faker.internet.url(),
            submit_link: faker.internet.url(),
          }),
        knex('polls').insert(
          {
            name_poll: faker.lorem.word(),
            question: faker.lorem.word(),
            admin_link: faker.internet.url(),
            submit_link: faker.internet.url(),
          }),
      ]);
    });
};
