'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetail.belongsTo(models.Product, {foreignKey:'productId'});
      OrderDetail.belongsTo(models.Order, {foreignKey:'orderId'});
    }
  };
  OrderDetail.init({
    amount: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};