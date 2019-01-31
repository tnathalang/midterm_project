const faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('midterm').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('midterm').insert(
          {
          id: faker.random.number(),
          name_poll: faker.lorem.word(),
          question: faker.lorem.sentence(),
          admin_link: faker.lorem.word(),
          submit_link: faker.lorem.word()
          }),
        knex('midterm').insert(
          {
          id: faker.random.number(),
          name_poll: faker.lorem.word(),
          question: faker.lorem.sentence(),
          admin_link: faker.lorem.word(),
          submit_link: faker.lorem.word()
          }),
        knex('midterm').insert(
          {
          id: faker.random.number(),
          name_poll: faker.lorem.word(),
          question: faker.lorem.sentence(),
          admin_link: faker.lorem.word(),
          submit_link: faker.lorem.word()
          })
      ]);
    });
};
