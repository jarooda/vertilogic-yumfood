const routes = require('express').Router()
const { DishController } = require('../../controllers/v1')

routes.get('/dishes', DishController.findAll)
routes.post('/dishes', DishController.create)

module.exports = routes