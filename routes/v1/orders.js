const routes = require('express').Router()
const { OrderController } = require('../../controllers/v1')

routes.get('/orders', OrderController.findAll)
routes.post('/orders', OrderController.create)

module.exports = routes