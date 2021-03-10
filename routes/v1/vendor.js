const routes = require('express').Router()
const { VendorController } = require('../../controllers/v1')
const vendorIdChecker = require('../../middlewares/vendorIdCheker')

routes.get('/vendors', VendorController.findAll)
routes.post('/vendors', VendorController.create)
routes.get('/vendors/:id', vendorIdChecker, VendorController.findById)
routes.put('/vendors/:id', vendorIdChecker, VendorController.update)
routes.delete('/vendors/:id', vendorIdChecker, VendorController.destroy)

module.exports = routes