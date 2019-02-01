exports.up = function(knex, Promise) {
  return knex.schema.createTable("polls", function(table) {
    table.integer("id");
    table.string("name_poll");
    table.string("question");
    table.string("admin_link");
    table.string("submit_link");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("polls")
};
