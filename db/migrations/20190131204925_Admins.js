exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("midterm", function(table) {
      table.integer("id");
      table.string("email");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("midterm")]);
};
