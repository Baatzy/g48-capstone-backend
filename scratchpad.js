// Below are proposed JSON data structures for the PG database

// Array of unique usernames, cannot be present in json_downvotes
const json_upvotes = [
  {user_id: USER_ID, username: "Bobclimber"},
  {user_id: USER_ID, username: "Bobclimber"},
  {user_id: USER_ID, username: "Bobclimber"},
  {user_id: USER_ID, username: "Bobclimber"},
  ]

  // Array of unique usernames, cannot be present in json_downvotes
const json_downvotes = [
  {user_id: USER_ID, username: "Bobclimber"},
  {user_id: USER_ID, username: "Bobclimber"},
  {user_id: USER_ID, username: "Bobclimber"},
  {user_id: USER_ID, username: "Bobclimber"},
  ]

const json_protocol = {
  name: '10 sec max hangs',
  category: 'Strength',
  muscle_group: 'Fingers',
  description: 'Using a 18-22 mm edge, perform a 10 sec hang with half-crimp form at a weight that you could theoretically hang for 13 sec. Rest 3-5 min between hangs. Complete 3-5 hangs, performing hangs using straight arms and activated shoulders.'
}

const json_logbook = {
  focus: '',
  schedule: {
    "2017_7_10": {
      duration: 120,
      warmup: {
        feeling: "Strong",
      },
      protocols: [
        PROTOCOL_ID, PROTOCOL_ID, PROTOCOL_ID,
        ],
      diary: "Today was a great training day, felt really strong.",
      completed: true,
      },
    "2017_7_14": {
      duration: 0,
      warmup: {
        feeling: "",
      },
      protocols: [
        PROTOCOL_ID, PROTOCOL_ID,
        ],
      diary: "",
      completed: null,
      },
    },
}
