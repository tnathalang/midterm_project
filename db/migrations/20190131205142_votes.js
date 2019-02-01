exports.up = function(knex, Promise) {
  return knex.schema.createTable("votes", function(table) {
    table.integer("id");
    table.integer("points");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("votes")
};
