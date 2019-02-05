const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE votes_id_seq RESTART WITH 1'),
    knex('choices_votes').del()
      .then(function () {
        return Promise.all([
          knex('choices_votes').insert({ choice_id: 1, vote_id: 1 }),
          knex('choices_votes').insert({ choice_id: 1, vote_id: 2 }),
          knex('choices_votes').insert({ choice_id: 1, vote_id: 3 }),
          knex('choices_votes').insert({ choice_id: 1, vote_id: 4 }),
          knex('choices_votes').insert({ choice_id: 2, vote_id: 5 }),
          knex('choices_votes').insert({ choice_id: 2, vote_id: 6 }),
          knex('choices_votes').insert({ choice_id: 2, vote_id: 7 }),
          knex('choices_votes').insert({ choice_id: 2, vote_id: 8 }),
          knex('choices_votes').insert({ choice_id: 3, vote_id: 9 }),
          knex('choices_votes').insert({ choice_id: 3, vote_id: 10 }),
          knex('choices_votes').insert({ choice_id: 3, vote_id: 11 }),
          knex('choices_votes').insert({ choice_id: 3, vote_id: 12 }),
          knex('choices_votes').insert({ choice_id: 4, vote_id: 13 }),
          knex('choices_votes').insert({ choice_id: 4, vote_id: 14 }),
          knex('choices_votes').insert({ choice_id: 4, vote_id: 15 }),
          knex('choices_votes').insert({ choice_id: 4, vote_id: 16 }),

        ]);
      })

  ])
};
