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
      Order.hasMany(models.OrderDetail, {foreignKey:'orderId'});
      Order.belongsTo(models.User, {foreignKey:'userId'});
    }
  };
  Order.init({
    orderCode: DataTypes.STRING,
    promotion: DataTypes.INTEGER,
    address: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};