'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.hasMany(models.Dish)
      Restaurant.belongsTo(models.Tag)
    }
  };
  Restaurant.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [1, 128]
      }
    },
    logo: DataTypes.STRING,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};