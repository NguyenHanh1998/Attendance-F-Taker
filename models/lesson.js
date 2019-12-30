'use strict';
module.exports = (sequelize, DataTypes) => {
  const lessons = sequelize.define('lessons', {
    name: DataTypes.STRING,
    lesson_time: DataTypes.STRING,
    learning_week_id: DataTypes.INTEGER
  }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    });
  return lessons;
};