exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("midterm", function(table) {
      table.integer("id");
      table.string("name_choice");
      table.string("description");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("midterm")]);
};
