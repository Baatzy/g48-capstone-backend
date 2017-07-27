exports.seed = (knex) => {
  return knex('users').insert([
    {
      id: 1,
      username: 'Baatzy',
      email: 'a@a.com',
      password: 'asdf',
      first_name: 'Stefan',
      last_name: 'Baatz',
      age: 29,
      location: 'Seattle, WA',
      bio: 'I love cimbing and burgers.',
      max_boulder: 'V11',
      max_sport: '5.13c',
      max_trad: 'N/A',
      last_active: 'LAST_ACTIVE_VALUE',
      fav_protocols: JSON.stringify([1])

    },
    {
      id: 2,
      username: 'Meliseymo',
      email: 'm@bm.com',
      password: 'asdf',
      first_name: 'Melise',
      last_name: 'Edwards',
      age: 27,
      location: 'Seattle, WA',
      bio: 'I\'m pretty good at climbing.',
      max_boulder: 'V10',
      max_sport: '5.12a',
      max_trad: '5.9',
      last_active: 'LAST_ACTIVE_VALUE',
      fav_protocols: JSON.stringify([1])
    },
    {
      id: 3,
      username: 'FrankenClimber',
      email: 'm@m.com',
      password: 'asdf',
      first_name: 'Alex',
      last_name: 'Megos',
      age: 23,
      location: 'Germany',
      bio: 'I love pocket climbing!',
      max_boulder: 'V15',
      max_sport: '5.15b',
      max_trad: '5.14b',
      last_active: 'LAST_ACTIVE_VALUE',
      fav_protocols: JSON.stringify([1])
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    )
  })
}
