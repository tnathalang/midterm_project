exports.up = function(knex, Promise) {
  return knex.schema.createTable("admins", function(table) {
    table.integer("id");
    table.string("email");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("admins")
};
