'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    student_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    time_checkin: DataTypes.STRING
  }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    });
  return students;
};