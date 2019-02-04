
exports.up = function (knex, Promise) {
    return knex.schema.table('polls', function (table) {
        table.integer('admin_id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('polls', function (table) {
        table.dropColum('admin_id')
    })

};
