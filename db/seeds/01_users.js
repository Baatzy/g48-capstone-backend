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
      username: 'Rambolicious',
      email: 'b@b.com',
      password: 'asdf',
      first_name: 'Rambo',
      last_name: 'Hambo',
      age: 27,
      location: 'Boulder, CO',
      bio: 'I\'m really good at climbing.',
      max_boulder: 'V14',
      max_sport: '5.14b',
      max_trad: '5.13a',
      last_active: 'LAST_ACTIVE_VALUE',
      fav_protocols: JSON.stringify([1])
    },
    {
      id: 3,
      username: 'User3',
      email: 'c@c.com',
      password: 'asdf',
      first_name: 'Alex',
      last_name: 'Megos',
      age: 0,
      location: '',
      bio: '',
      max_boulder: '',
      max_sport: '',
      max_trad: '',
      last_active: 'LAST_ACTIVE_VALUE',
      fav_protocols: JSON.stringify([1])
    }
  ]).then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    )
  })
}
