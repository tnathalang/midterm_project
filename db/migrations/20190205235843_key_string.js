
exports.up = function (knex, Promise) {
    return knex.schema.table('polls', function (table) {

        table.string('key').unique()

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('polls', function (table) {

        table.dropColumn('key')
    })
}
