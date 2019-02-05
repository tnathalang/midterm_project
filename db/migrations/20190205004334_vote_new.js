
exports.up = function (knex, Promise) {
    return knex.schema.table('votes',
        function (table) {
            table.integer('choice_id')


        })
};

exports.down = function (knex, Promise) {

    return knex.schema.table('votes', function (table) {
        table.dropColumn('choice_id')
    })
}





