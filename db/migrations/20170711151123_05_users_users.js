exports.up = (knex) => {
  return knex.schema.createTable('users_users', (table) => {
    table.increments()
    table.integer('user1_id').notNullable()
    table.integer('user2_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users_users')
}
