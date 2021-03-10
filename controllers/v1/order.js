const { Order, Dish, Restaurant, User } = require('../../models')

class OrderController {
  static async findAll (req, res, next) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: Restaurant
          },
          {
            model: Dish
          },
          {
            model: User,
            attributes: ['id', 'name', 'email']
          }
        ]
      })

      res.status(200).json({ data: orders })
    } catch (error) {
      console.log(error)
    }
  }

  static async create (req, res, next) {
    try {
      const { RestaurantId, DishId, UserId, special_request, quantity } = req.body

      const order = await Order.create({
        special_request, quantity, RestaurantId, DishId, UserId
      })

      res.status(200).json({ data: order })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = OrderController