exports.up = function(knex, Promise) {
  return (
    Promise.all([
      knex.schema.table("midterm", function(table) {
        table.string("name_choice");
        table.string("description");
      })
    ])

  )
};

exports.down = function(knex, Promise) {
  return knex.schema.table('midterm', function(t) {
        t.dropColumn('name_choice');
        t.dropColumn('description');

    });
};
