exports.seed = (knex) => {
  return knex('users_protocols').insert([
    {
      id: 1,
      user_id: 1,
      protocol_id: 1
    },
    {
      id: 2,
      user_id: 1,
      protocol_id: 2
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('users_protocols_id_seq', (SELECT MAX(id) FROM users_protocols));"
    )
  })
}
