const routes = require('express').Router()
const { OrderController } = require('../../controllers')

routes.get('/orders', OrderController.findAll)
routes.post('/orders', OrderController.create)

module.exports = routes