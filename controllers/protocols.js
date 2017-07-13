const Protocol = require('../models/protocols')
const Utilties = require('./utilities')

async function index (req, res, next) {
  let protocols

  try {
    protocols = await Protocol.indexAll()
    res.send({ protocols })
  } catch (err) {
    res.send(err)
  }
}

async function show (req, res, next) {
  let protocol
  const id = req.params.id

  try {
    protocol = await Protocol.showById(id)
    protocol = protocol[0]['json_protocol']
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
  let protocol
  const newProtocol = {
    user_id: req.body['user_id'],
    json_protocol: JSON.stringify(req.body['json_protocol']),
    json_upvotes: JSON.stringify([]),
    json_downvotes: JSON.stringify([]),
  }

  try {
    protocol = await Protocol.postNew(newProtocol)
    res.send({ protocol })
  } catch (err) {
    res.send(err)
  }
}

async function update (req, res, next) {
  let protocol
  const id = req.params.id
  const updatedProtocol = {
    user_id: req.body['user_id'],
    json_protocol: req.body['json_protocol'],
    json_upvotes: req.body['json_upvotes'],
    json_downvotes: req.body['json_downvotes'],
  }

  try {
    protocol = await Protocol.patchById(id, updatedProtocol)
    res.send({ updatedProtocol })
  } catch (err) {
    res.send(err)
  }
}

async function destroy (req, res, next) {
  let deletedProtocol
  const id = req.params.id

  try {
    deletedProtocol = await Protocol.deleteById(id)
    res.send({ deletedProtocol })
  } catch (err) {
    res.send(err)
  }
}

module.exports = { index, show, create, update, destroy }
