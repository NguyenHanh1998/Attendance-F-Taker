'use strict';
module.exports = (sequelize, DataTypes) => {
  const student_presences = sequelize.define('student_presences', {
    student_id: DataTypes.INTEGER,
    lesson_id: DataTypes.INTEGER
  }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    });
  return student_presences;
};