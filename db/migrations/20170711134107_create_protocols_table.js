exports.up = (knex) => {
  return knex.schema.createTable('protocols', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.jsonb('json_protocol')
    table.jsonb('json_upvotes')
    table.jsonb('json_downvotes')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('protocols')
}
