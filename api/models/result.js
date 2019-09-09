'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    repositoryName: DataTypes.STRING,
    status: DataTypes.STRING,
    findings: DataTypes.JSONB,
    queuedAt: DataTypes.DATE,
    scanningAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE
  }, {});
  Result.associate = function(models) {
    // associations can be defined here
  };
  return Result;
};