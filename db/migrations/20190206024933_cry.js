
exports.up = function (knex, Promise) {
    return knex.schema.table('votes', function (table) {
        table.integer('choice_id')
        table.foreign('choice_id').references('id').on('choices').onDelete('cascade')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('votes', function (table) {

        table.dropColumn('choice_id')
    })
};
