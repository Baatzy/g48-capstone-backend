exports.seed = (knex) => {
  return knex('protocols').insert([
    {
      id: 1,
      author_user_id: 2,
      author_username: 'Meliseymo',
      json_protocol: JSON.stringify({
        name: '10 sec max hangs',
        category: 'Strength',
        muscleGroup: 'Fingers',
        duration: 30,
        description: 'Using a 18-22 mm edge, perform a 10 sec hang with half-crimp form at a weight that you could theoretically hang for 13 sec. Rest 3-5 min between hangs. Complete 3-5 hangs, performing hangs using straight arms and activated shoulders.'
      }),
      json_upvotes: JSON.stringify([
        {userId: 1, username: 'Baatzy'}
      ]),
      json_downvotes: JSON.stringify([])
    },
    {
      id: 2,
      author_user_id: 1,
      author_username: 'Baatzy',
      json_protocol: JSON.stringify({
        name: 'Weighted pull-ups',
        category: 'Strength',
        muscleGroup: 'Lats',
        duration: 20,
        description: 'Using a pull up bar, determine your 1RM with added weight. Using the total value of your body weight plus your added 1RM weight, perform 5 reps at 80% that total weight. Rest 5 minutes. Repeat for 2-3 total sets. Maintain 1.5x shoulder-width hand spacing, make sure to retract and pull down your shoulders to stablize your humeral head positions, and strive for a complete pulling motion from a near straight arm at the bottom of the rep to full head above the bar at the top of the rep.'
      }),
      json_upvotes: JSON.stringify([
        {userId: 1, username: 'Baatzy'}
      ]),
      json_downvotes: JSON.stringify([])
    },
    {
      id: 3,
      author_user_id: 3,
      author_username: 'FrankenClimber',
      json_protocol: JSON.stringify({
        name: 'Hamstring stretch',
        category: 'Self Care',
        muscleGroup: 'Legs',
        duration: 15,
        description: 'Lay on the ground on your back with butt directly up against a wall. Prop legs up against the wall and keep them as straight as possible. If done correctly, you should feel a good hamstring stretch that requires little to no muscular activation. Perform two sets of 5 minutes.'
      }),
      json_upvotes: JSON.stringify([]),
      json_downvotes: JSON.stringify([])
    },
    {
      id: 4,
      author_user_id: 2,
      author_username: 'Meliseymo',
      json_protocol: JSON.stringify({
        name: 'Core Burnout',
        category: 'Strength Endurance',
        muscleGroup: 'Core',
        duration: 20,
        description: 'A simple floormat exercise, valuable for your core endurance. Taking no breaks between these exercises: perform 10 ice-cream makers, hold a 1 min plank, and finish with 1 min of V-situps. Rest 5 minutes, then perform everything a second time.'
      }),
      json_upvotes: JSON.stringify([]),
      json_downvotes: JSON.stringify([])
    },
  ]).then(() => {
    return knex.raw(
      "SELECT setval('protocols_id_seq', (SELECT MAX(id) FROM protocols));"
    )
  })
}
