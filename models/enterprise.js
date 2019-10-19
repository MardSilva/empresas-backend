'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    name: DataTypes.STRING,
    enterprise_type: DataTypes.STRING
  }, {});
  Enterprise.associate = function(models) {
    // associations can be defined here
  };
  return Enterprise;
};