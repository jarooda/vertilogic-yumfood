const routes = require('express').Router()
const { VendorController } = require('../../controllers')

routes.get('/vendors', VendorController.findAll)
routes.post('/vendors', VendorController.create)
routes.put('/vendors/:id', VendorController.update)
routes.delete('/vendors/:id', VendorController.destroy)

module.exports = routes