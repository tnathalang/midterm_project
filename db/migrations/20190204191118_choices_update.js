
exports.up = function (knex, Promise) {
    return knex.schema.table('choices',
        function (table) {
            table.integer('choice_number')
            table.string('poll_id')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('choices',
        function (table) {
            table.dropColumn('poll_id'),
                table.dropColumn('choice_number')
        })
};
