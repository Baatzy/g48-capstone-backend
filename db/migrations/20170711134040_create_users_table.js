exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('first_name').defaultTo('')
    table.string('last_name').defaultTo('')
    table.integer('age').defaultTo(0)
    table.string('location').defaultTo('')
    table.string('bio').defaultTo('')
    table.string('max_boulder').defaultTo('')
    table.string('max_sport').defaultTo('')
    table.string('max_trad').defaultTo('')
    table.string('last_active').defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
