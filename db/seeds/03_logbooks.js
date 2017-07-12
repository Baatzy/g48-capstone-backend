exports.seed = (knex) => {
  return knex('logbooks').insert([
    {
      id: 1,
      user_id: 1,
      json_logbook: JSON.stringify({
        mainFocus: 'Strength and power',
        schedule: [
          {
            date: "2017_7_10",
            duration: 50,
            warmupNotes: "20' bouldering, feeling strong!",
            protocols: [ 1, 2 ],
            sessionNotes: "New max hang baseline of +85! Today was a great training day, felt really strong.",
            completed: true
          },
          {
            date: "2017_7_11",
            duration: 50,
            warmupNotes: "30' boulders, feel weak today...",
            protocols: [ 2, 1 ],
            sessionNotes: "I felt really tired today. Had to bail during the warmup!",
            completed: false
          },
          {
            date: "2017_7_20",
            duration: 30,
            warmupNotes: "",
            protocols: [ 1 ],
            sessionNotes: "",
            completed: null
          }
        ]
      })
    },
  ]).then(() => {
    return knex.raw(
      "SELECT setval('logbooks_id_seq', (SELECT MAX(id) FROM logbooks));"
    )
  })
}
