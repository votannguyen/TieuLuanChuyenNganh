'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Size.hasMany(models.ProductSize, {foreignKey:'sizeId'});
    }
  };
  Size.init({
    name: DataTypes.STRING,
    summary: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};