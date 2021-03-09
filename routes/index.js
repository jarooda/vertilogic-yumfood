const routes = require('express').Router()
const v1 = require('./v1')

routes.use('/api', v1)

module.exports = routes