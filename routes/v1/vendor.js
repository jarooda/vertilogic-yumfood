const routes = require('express').Router()
const { VendorController } = require('../../controllers/v1')

routes.get('/vendors', VendorController.findAll)
routes.post('/vendors', VendorController.create)
routes.get('/vendors/:id', VendorController.findById)
routes.put('/vendors/:id', VendorController.update)
routes.delete('/vendors/:id', VendorController.destroy)

module.exports = routes