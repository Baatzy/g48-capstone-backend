exports.seed = (knex) => {
  return knex('logbooks').insert([
    {
      id: 1,
      user_id: 1,
      json_logbook: JSON.stringify({
        mainFocus: 'More strength and power!',
        schedule: [
          {
            date: "2017_07_15",
            duration: 70,
            warmupNotes: "20' bouldering, feeling strong!",
            protocols: [ 1, 2, 4 ],
            sessionNotes: "New max hang baseline of +85! Today was a great training day, felt really strong.",
            completed: true
          },
          {
            date: "2017_07_19",
            duration: 55,
            warmupNotes: "30' boulders, feel weak today...",
            protocols: [ 2, 3, 4 ],
            sessionNotes: "I felt really tired today. Had to bail during the warmup!",
            completed: false
          },
          {
            date: "2017_07_30",
            duration: 85,
            warmupNotes: "",
            protocols: [ 1, 2, 3, 4 ],
            sessionNotes: "Huge day, and felt really good! Did all my favorite and hardest workouts! I deserve some ice cream.",
            completed: null
          }
        ]
      })
    },
    {
      id: 2,
      user_id: 2,
      json_logbook: JSON.stringify({
        mainFocus: 'Pullups and the American way',
        schedule: [
          {
            date: "2017_07_10",
            duration: 50,
            warmupNotes: "20' bouldering, feeling strong!",
            protocols: [ 1, 2 ],
            sessionNotes: "New max hang baseline of +85! Today was a great training day, felt really strong.",
            completed: true
          },
          {
            date: "2017_07_11",
            duration: 50,
            warmupNotes: "30' boulders, feel weak today...",
            protocols: [ 2, 1 ],
            sessionNotes: "I felt really tired today. Had to bail during the warmup!",
            completed: false
          },
          {
            date: "2017_07_20",
            duration: 30,
            warmupNotes: "",
            protocols: [ 1 ],
            sessionNotes: "",
            completed: null
          }
        ]
      })
    },
    {
      id: 3,
      user_id: 3,
      json_logbook: JSON.stringify({
        mainFocus: 'Pockets and sausages',
        schedule: [
          {
            date: "2017_07_10",
            duration: 50,
            warmupNotes: "20' bouldering, feeling strong!",
            protocols: [ 1, 2 ],
            sessionNotes: "New max hang baseline of +85! Today was a great training day, felt really strong.",
            completed: true
          },
          {
            date: "2017_07_11",
            duration: 50,
            warmupNotes: "30' boulders, feel weak today...",
            protocols: [ 2, 1 ],
            sessionNotes: "I felt really tired today. Had to bail during the warmup!",
            completed: false
          },
          {
            date: "2017_07_20",
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
