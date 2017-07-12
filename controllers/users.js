const User = require('../models/users')
const Utilties = require('./utilities')

async function index (req, res, next) {
  let users

  try {
    users = await User.indexAll()
    res.send({ users })
  } catch (err) {
    res.send(err)
  }
}

async function show (req, res, next) {
  const id = req.params.id
  let user

  try {
    user = await User.showById(id)
    res.send({ user })
  } catch (err) {
    res.send(err)
  }
}

async function create (req, res, next) {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  let user

  try {
    user = await User.postNew(newUser)
    res.send({ user })
  } catch (err) {
    res.send(err)
  }
}

async function update (req, res, next) {
  const id = req.params.id
  const updatedUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    first_name: req.body['first_name'],
    last_name: req.body['last_name'],
    age: req.body.age,
    location: req.body.location,
    bio: req.body.bio,
    max_boulder: req.body['max_boulder'],
    max_sport: req.body['max_sport'],
    max_trad: req.body['max_trad'],
  }
  let user

  try {
    user = await User.patchById(id, updatedUser)
    res.send({ user })
  } catch (err) {
    res.send(err)
  }
}

async function destroy (req, res, next) {
  const id = req.params.id
  let deletedUser

  try {
    deletedUser = await User.deleteById(id)
    res.send({ deletedUser })
  } catch (err) {
    res.send(err)
  }
}

module.exports = { index, show, create, update, destroy }
