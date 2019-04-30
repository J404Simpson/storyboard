exports.up = function (knex, Promise) {
  return knex.schema.createTable('sentences', table => {
    table.increments('id').primary()
    table.string('sentence')
    table.datetime('datetime').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('sentences')
}
