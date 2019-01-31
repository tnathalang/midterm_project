exports.up = function(knex, Promise) {
  return (
    Promise.all([
    knex.schema.table("midterm", function(table) {
      table.integer("points");
    })
  ])
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.table('midterm', function(t) {
        t.dropColumn('points');
    });
};
