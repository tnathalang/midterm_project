
exports.up = function (knex, Promise) {
    return knex.schema.table('admins', function (tabble) {
        table.integer('admin_id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('admins', function (table) {
        table.dropColum('admin_id')
    })

};
