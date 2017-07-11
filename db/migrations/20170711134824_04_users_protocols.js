exports.up = (knex) => {
  return knex.schema.createTable('users_protocols', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.integer('protocol_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users_protocols')
}
