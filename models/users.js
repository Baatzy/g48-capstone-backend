const db = require('../db')

class User {
  constructor () {}

  static indexAll () {
    return db('users')
  }

  static showById (id) {
    return db('users').where({ id })
  }

  static postNew (body) {
    return db('users').insert(body, '*')
  }

  static editById (id, body) {
    return db('users').update(body, '*').where({ id })
  }

  static deleteById (id) {
    return db('users').del().where({ id })
  }
}

module.exports = User
