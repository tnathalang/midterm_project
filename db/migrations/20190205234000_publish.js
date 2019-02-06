
exports.up = function (knex, Promise) {
    return knex.schema.table('polls', function (table) {
        table.boolean('published')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('polls', function (table) {
        table.dropColumn('published')
    })

}
