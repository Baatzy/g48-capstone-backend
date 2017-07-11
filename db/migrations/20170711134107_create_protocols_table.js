exports.up = (knex) => {
  return knex.schema.createTable('protocols', (table) => {
    table.increments()
    table.integer('user_id').unique().notNullable()
    table.jsonb('json_protocol').defaultTo({}).notNullable()
    table.jsonb('json_upvotes').defaultTo([])
    table.jsonb('json_downvotes').defaultTo([])
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('protocols')
}
