const { Dish } = require('../../models')

class DishController {
  static async findAll (req, res, next) {
    try {
      const { RestaurantId } = req.query

      if (!RestaurantId) {
        throw {
          status: 400,
          message: "Query Required"
        }
      }

      const dish = await Dish.findAll({
        where: {
          RestaurantId
        }
      })

      res.status(200).json({ data: dish })
    } catch (error) {
      console.log(error)
    }
  }

  static async create (req, res, next) {
    try {
      const { name, price, RestaurantId } = req.body
      
      const dish = await Dish.create({
        name, price, RestaurantId
      })

      res.status(200).json({ data: dish })

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = DishController