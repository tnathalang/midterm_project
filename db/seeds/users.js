exports.seed = function (knex, Promise) {
  knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ id: 1, name: 'Alice' }),
        knex('users').insert({ id: 2, name: 'Bob' }),
        knex('users').insert({ id: 3, name: 'Charlie' })
      ]);
    });
};
