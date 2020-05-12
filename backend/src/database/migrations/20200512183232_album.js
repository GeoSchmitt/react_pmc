
exports.up = function(knex) {
    return knex.schema.createTable('album'), 
      function (table) {
          table.string('id').primary();
          table.string('titulo').notNullable();
          table.string('capa').notNullable();
          table.string('_fk_artista').notNullable();
          table.timestamp('created_at').defaultTo(knex.fn.now())
          table.timestamp('updated_at').defaultTo(knex.fn.now())
      };
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('album');
  };