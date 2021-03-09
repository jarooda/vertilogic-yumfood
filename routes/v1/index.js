const routes = require('express').Router()
const vendors = require('./vendor')
const dishes = require('./dishes')
const orders = require('./orders')

routes.use('/v1', vendors)
routes.use('/v1', dishes)
routes.use('/v1', orders)

module.exports = routes