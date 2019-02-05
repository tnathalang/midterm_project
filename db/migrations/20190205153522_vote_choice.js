
exports.up = function (knex, Promise) {
    return knex.schema.createTable('choices_votes', function (table) {
        table.increments('id')
        table.integer('choice_id')
        table.foreign("choice_id").references('id').on("choices").onDelete('cascade')
        table.integer('vote_id')
        table.foreign('vote_id').references('id').on('votes').onDelete('cascade')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('choices_votes')
};
