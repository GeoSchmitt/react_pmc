let knex = require('knex')({});

console.log(knex.schema.createTable('user', function(table) {
    table.string('name');
    table.string('email', 128);
}).toString()); 