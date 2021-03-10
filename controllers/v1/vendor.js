const { Op } = require("sequelize")
const { Restaurant, Dish, Tag } = require('../../models')

class VendorController {
  static async findAll (req, res, next) {
    try {
      const { tags } = req.query
      let optionTag = {}

      if (tags) {
        optionTag = {
          model: Tag,
          where: {
            name: {
              [Op.or]: tags
            }
          }
        }
      } else {
        optionTag = {
          model: Tag
        }
      }

      const restaurants = await Restaurant.findAll({
        include: [
          {
            model: Dish
          },
          optionTag
        ]
      })

      res.status(200).json({ data: restaurants })

    } catch (error) {
      console.log(error)
    }
  }

  static async create (req, res, next) {
    try {
      const { name, logo, TagId } = req.body

      const restaurant = await Restaurant.create({
        name,
        logo,
        TagId
      })

      res.status(200).json({ data: restaurant })

    } catch (error) {
      console.log(error)
    }
  }

  static async findById (req, res, next) {
    try {
      const { id } = req.params

      const restaurant = await Restaurant.findByPk(id, {
        include: [
          {
            model: Tag
          },
          {
            model: Dish
          }
        ]
      })

      res.status(200).json({ data: restaurant })
    } catch (error) {
      console.log(error)
    }
  }

  static async update (req, res, next) {
    try {
      const { id } = req.params
      const { name, logo, TagId } = req.body

      const restaurant = await Restaurant.update({
        name, logo, TagId
      }, {
        where: {
          id
        },
        returning: true
      })

      res.status(200).json({ data: restaurant[1][0] })
    } catch (error) {
      console.log(error)
    }
  }

  static async destroy (req, res, next) {
    try {
      const { id } = req.params
      
      const restaurant = Restaurant.destroy({
        where: {
          id
        }
      })

      res.status(200).json({ message: "Data deleted" })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = VendorController