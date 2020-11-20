'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.ProductSize, {foreignKey:'productId'});
      Product.hasMany(models.OrderDetail, {foreignKey:'productId'});
      Product.hasMany(models.ProductImage, {foreignKey:'productId'});
      Product.belongsTo(models.Brand, {foreignKey: 'brandId'});
      Product.belongsTo(models.Category, {foreignKey: 'categoryId'});
    }
  };
  Product.init({
    name: DataTypes.STRING,
    productCode: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    status: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    alias: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    color: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};