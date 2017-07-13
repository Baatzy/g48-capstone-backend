const db = require('../db')

class Logbook {
  constructor () {}

  static indexAll () {
    return db('logbooks') 
  }

  static showById (id) {
    return db('logbooks').where({ id })
  }

  static postNew (body) {
    return db('logbooks').insert(body, '*')
  }

  static patchById (id, body) {
    return db('logbooks').update(body, '*').where({ id })
  }

  static deleteById (id) {
    return db('logbooks').del().where({ id }).returning('*')
  }
}

module.exports = Logbook
