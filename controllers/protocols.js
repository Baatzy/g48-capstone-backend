const Protocol = require('../models/protocols')
const Utilties = require('./utilities')

async function index (req, res, next) {
  let protocols

  try {
    protocols = await Protocol.indexAll()
    res.send(protocols)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function show (req, res, next) {
  let protocol
  const id = req.params.id

  try {
    protocol = await Protocol.showById(id)
    res.send(protocol)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function create (req, res, next) {
  let protocol
  const newProtocol = {
    author_user_id: req.body.author_user_id,
    author_username: req.body.author_username,
    json_protocol: JSON.stringify(req.body.json_protocol),
    json_upvotes: JSON.stringify([]),
    json_downvotes: JSON.stringify([]),
  }

  try {
    protocol = await Protocol.postNew(newProtocol)
    res.send(protocol)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function update (req, res, next) {
  let protocol
  const id = req.params.id
  const updatedProtocol = {
    json_protocol: JSON.stringify(req.body.json_protocol),
    json_upvotes: JSON.stringify(req.body.json_upvotes),
    json_downvotes: JSON.stringify(req.body.json_downvotes),
  }

  try {
    protocol = await Protocol.patchById(id, updatedProtocol)
    res.send(protocol)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function destroy (req, res, next) {
  let deletedProtocol
  const id = req.params.id

  try {
    deletedProtocol = await Protocol.deleteById(id)
    res.send(deletedProtocol)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = { index, show, create, update, destroy }
