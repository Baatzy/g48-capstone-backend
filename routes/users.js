const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

router.get('/users', ctrl.index)
router.get('/users/:id', ctrl.show)
router.post('/users', ctrl.create)
router.put('/users/:id', ctrl.update)
router.delete('/users/:id', ctrl.destroy)

module.exports = router
