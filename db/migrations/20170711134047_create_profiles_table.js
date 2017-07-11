exports.up = (knex) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments()
    table.integer('user_id').unique().notNullable()
    table.string('first_name').defaultTo('')
    table.string('last_name').defaultTo('')
    table.integer('age').defaultTo(0)
    table.string('location').defaultTo('')
    table.string('bio').defaultTo('')
    table.string('max_boulder').defaultTo('')
    table.string('max_sport').defaultTo('')
    table.string('max_trad').defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('profiles')
}
