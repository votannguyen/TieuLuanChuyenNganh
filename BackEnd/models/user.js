'use strict';
const {
  Model, BOOLEAN, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order, {foreignKey:'userId'});
    }
  };
  User.init({ 
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    isConfirm: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};