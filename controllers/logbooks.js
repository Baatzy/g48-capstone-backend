const Logbook = require('../models/logbooks')
const Utilties = require('./utilities')

async function index (req, res, next) {
  let logbook

  try {
    logbook = await Logbook.indexAll()
    res.send(logbook)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function show (req, res, next) {
  let logbook
  const id = req.params.id

  try {
    logbook = await Logbook.showById(id)
    res.send(logbook)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function create (req, res, next) {
  let logbook
  const newLogbook = {
    user_id: req.body.user_id,
    json_logbook: JSON.stringify(req.body.json_logbook),
  }

  try {
    logbook = await Logbook.postNew(newLogbook)
    res.send(logbook)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function update (req, res, next) {
  const id = req.params.id
  const updatedLogbook = {
    json_logbook: JSON.stringify(req.body.json_logbook),
  }

  try {
    let logbook = await Logbook.patchById(id, updatedLogbook)
    res.send(logbook)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function destroy (req, res, next) {
  let deletedLogbook
  const id = req.params.id

  try {
    deletedLogbook = await Logbook.deleteById(id)
    res.send(deletedLogbook)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = { index, show, create, update, destroy }
