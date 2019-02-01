const faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('midterm')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('midterm').where({id: 1}).update(
          {
          name_choice: faker.lorem.word(),
          description: faker.lorem.word()
          }),
        knex('midterm').where({id: 2}).update(
          {
          name_choice: faker.lorem.word(),
          description: faker.lorem.word()
          }),
        knex('midterm').where({id: 3}).update(
          {
          name_choice: faker.lorem.word(),
          description: faker.lorem.word()
          })
      ]);
    });
};
