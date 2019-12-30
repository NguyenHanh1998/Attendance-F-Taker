'use strict';
module.exports = function (sequelize, DataTypes) {
  const learning_weeks = sequelize.define('learning_weeks', {
    week: DataTypes.INTEGER,
    learning_semester: DataTypes.STRING
  }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    });

  return learning_weeks;
};