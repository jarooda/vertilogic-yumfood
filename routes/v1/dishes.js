const routes = require('express').Router()
const { DishController } = require('../../controllers')

routes.get('/dishes', DishController.findAll)

module.exports = routes