exports.up = (knex) => {
  return knex.schema.createTable('logbooks', (table) => {
    table.increments()
    table.integer('user_id').unique().notNullable()
    table.jsonb('json_logbook').defaultTo({}).notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('logbooks')
}
