'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Specification.hasMany(models.ProductSpecification, {foreignKey:'specificationId'});
    }
  };
  Specification.init({
    name: DataTypes.STRING,
    summary: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Specification',
  });
  return Specification;
};