exports.seed = (knex) => {
  return knex('users_users').insert([
    {
      id: 1,
      user1_id: 1,
      user2_id: 2,
      confirmed: true
    },
    {
      id: 2,
      user1_id: 1,
      user2_id: 3,
      confirmed: false
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('users_users_id_seq', (SELECT MAX(id) FROM users_users));"
    )
  })
