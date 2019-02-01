exports.up = function(knex, Promise) {
  return knex.schema.createTable("choices", function(table) {
    table.increments('id');
    table.string("name_choice");
    table.string("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("choices")
};
