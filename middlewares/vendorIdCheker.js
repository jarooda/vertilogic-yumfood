const { Restaurant } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params

    const restaurant = await Restaurant.findByPk(id)

    if (restaurant) {
      next()
    } else {
      throw {
        status: 404,
        message: "Not Found"
      }
    }

  } catch (error) {
    next(error)
  }
}