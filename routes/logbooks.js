const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/logbooks')

router.get('/logbooks', ctrl.index)
router.get('/logbooks/:id', ctrl.show)
router.post('/logbooks', ctrl.create)
router.put('/logbooks/:id', ctrl.update)
router.delete('/logbooks/:id', ctrl.destroy)

module.exports = router
