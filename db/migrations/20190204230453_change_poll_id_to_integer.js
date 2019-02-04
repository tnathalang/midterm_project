
exports.up = function (knex, Promise) {
    knex.schema.table('choices', function (table) {
        table.dropColumn('poll_id');
        table.integer('poll_id');

    })


};

exports.down = function (knex, Promise) {
    return knex.schema.table('choices',
        function (table) {
            table.dropColumn('poll_id')

        })
};




