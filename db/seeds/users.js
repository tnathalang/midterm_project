exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE polls_id_seq RESTART WITH 1'),
    knex('users').del()
      .then(function () {
        return Promise.all([
          knex('users').insert({ id: 1, name: 'Alice' }),
          knex('users').insert({ id: 2, name: 'Bob' }),
          knex('users').insert({ id: 3, name: 'Charlie' })
        ]);
      })
  ])
};
