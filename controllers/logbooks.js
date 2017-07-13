const Logobook = require('../models/logbooks')
const Utilties = require('./utilities')

async function index (req, res, next) {
  let logbook

  try {
    logbook = await Logbook.indexAll()
    res.send({ logbook })
  } catch (err) {
    res.send(err)
  }
}

async function show (req, res, next) {
  let logbook
  const id = req.params.id

  try {
    logbook = await Logbook.showById(id)
    logbook = protocol[0]['json_protocol']
    console.log(protocol['json_protocol']);
    // protocol['json_protocol'] = JSON.parse(protocol['json_protocol'])
    // protocol['json_upvotes'] = JSON.parse(protocol['json_upvotes'])
    // protocol['json_downvotes'] = JSON.parse(protocol['json_downvotes'])
    // console.log("Second log", protocol);
    res.send({ protocol })
  } catch (err) {
    res.send(err)
  }
}

async function create (req, res, next) {
  let logbook
  const newLogbook = {
    user_id: req.body['user_id'],
    json_protocol: JSON.stringify(req.body['json_protocol']),
    json_upvotes: JSON.stringify([]),
    json_downvotes: JSON.stringify([]),
  }

  try {
    logbook = await Logbook.postNew(newLogbook)
    res.send({ logbook })
  } catch (err) {
    res.send(err)
  }
}

async function update (req, res, next) {
  let logbook
  const id = req.params.id
  const updatedLogbook = {
    user_id: req.body['user_id'],
    json_protocol: req.body['json_protocol'],
    json_upvotes: req.body['json_upvotes'],
    json_downvotes: req.body['json_downvotes'],
  }

  try {
    logbook = await Logbook.patchById(id, updatedLogbook)
    res.send({ updatedLogbook })
  } catch (err) {
    res.send(err)
  }
}

async function destroy (req, res, next) {
  let deletedLogbook
  const id = req.params.id

  try {
    deletedLogbook = await Logbook.deleteById(id)
    res.send({ deletedLogbook })
  } catch (err) {
    res.send(err)
  }
}

module.exports = { index, show, create, update, destroy }
