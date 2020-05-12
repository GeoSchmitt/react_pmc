
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usuario'), 
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    };
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usuario');
};