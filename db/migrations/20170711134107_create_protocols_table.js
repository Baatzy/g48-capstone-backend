exports.up = (knex) => {
  return knex.schema.createTable('protocols', (table) => {
    table.increments()
    table.integer('author_user_id').notNullable()
    table.string('author_username').notNullable()
    table.jsonb('json_protocol')
    table.jsonb('json_upvotes')
    table.jsonb('json_downvotes')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('protocols')
}
