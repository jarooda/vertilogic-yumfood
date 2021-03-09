'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Restaurant)
      Order.belongsTo(models.User)
      Order.belongsTo(models.Dish)
    }
  };
  Order.init({
    special_request: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER,
    DishId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};