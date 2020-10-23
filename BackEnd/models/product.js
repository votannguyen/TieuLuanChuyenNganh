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
      Product.hasMany(models.WishList, {foreignKey : 'productId'});
      Product.belongsTo(models.Brand, {foreignKey: 'brandId'});
      Product.belongsTo(models.Category, {foreignKey: 'categoryId'});
      Product.belongsTo(models.Group, {foreignKey: 'groupId'});
      
    }
  };
  Product.init({
    name: DataTypes.STRING,
    productCode: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imagePath: DataTypes.TEXT,
    state: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    alias: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};