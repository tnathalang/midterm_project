
exports.up = function (knex, Promise) {
    knex.schema.table('choices', function (table) {
        table.dropColumn('poll_id');
        table.integer('poll_id');
        table.foreign('poll_id').references('id').on('polls').onDelete('cascade')

    })


};

exports.down = function (knex, Promise) {
    knex.schema.table('choices', function (table) {
        table.dropColumn('poll_id');
        table.integer('poll_id');
        table.foreign('poll_id').references('id').on('polls').onDelete('cascade')

    })
}




