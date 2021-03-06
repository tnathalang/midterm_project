const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE polls_id_seq RESTART WITH 1'),
    knex('polls').del()
      .then(function () {
        return Promise.all([
          knex('polls').insert(
            {
              name_poll: faker.lorem.word(),
              question: faker.lorem.word(),
              admin_link: faker.internet.url(),
              submit_link: faker.internet.url(),
              admin_id: 1
            }),
          knex('polls').insert(
            {
              name_poll: faker.lorem.word(),
              question: faker.lorem.word(),
              admin_link: faker.internet.url(),
              submit_link: faker.internet.url(),
              admin_id: 2
            }),
          knex('polls').insert(
            {
              name_poll: faker.lorem.word(),
              question: faker.lorem.word(),
              admin_link: faker.internet.url(),
              submit_link: faker.internet.url(),
              admin_id: 3
            }),
        ])
        return

      })
  ])
}

