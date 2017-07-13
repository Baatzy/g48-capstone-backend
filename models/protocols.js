const db = require('../db')

class Protocol {
  constructor () {}

  static indexAll () {
    return db('protocols')
  }

  static showById (id) {
    return db('protocols').where({ id })
  }

  static postNew (body) {
    return db('protocols').insert(body, '*')
  }

  static patchById (id, body) {
    return db('protocols').update(body, '*').where({ id })
  }

  static deleteById (id) {
    return db('protocols').del().where({ id }).returning('*')
  }
}

module.exports = Protocol
