const User = require('../models/users')
const Logbook = require('../models/logbooks')
const Utilties = require('./utilities')

async function index (req, res, next) {
  let users

  try {
    users = await User.indexAll()
    res.send(users)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function show (req, res, next) {
  let user
  const id = req.params.id

  try {
    user = await User.showById(id)
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function create (req, res, next) {
  let user
  let logbook
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  const newLogbook = {
    user_id: null,
    json_logbook: {data: null},
  }

  try {
    user = await User.postNew(newUser)
    newLogbook.user_id = user[0].id
    logbook = await Logbook.postNew(newLogbook)
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function update (req, res, next) {
  let user
  const id = req.params.id
  const updatedUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    location: req.body.location,
    bio: req.body.bio,
    max_boulder: req.body.max_boulder,
    max_sport: req.body.max_sport,
    max_trad: req.body.max_trad,
  }

  try {
    user = await User.patchById(id, updatedUser)
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function destroy (req, res, next) {
  let deletedUser
  const id = req.params.id

  try {
    deletedUser = await User.deleteById(id)
    res.send(deletedUser)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = { index, show, create, update, destroy }
