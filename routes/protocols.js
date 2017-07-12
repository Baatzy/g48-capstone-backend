const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/protocols')

router.get('/protocols', ctrl.index)
router.get('/protocols/:id', ctrl.show)
router.post('/protocols', ctrl.create)
router.put('/protocols/:id', ctrl.update)
router.delete('/protocols/:id', ctrl.destroy)

module.exports = router
