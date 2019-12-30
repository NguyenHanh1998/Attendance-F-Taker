'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [{
      first_name: 'Nguyen',
      last_name: 'Hanh',
      student_id: 20161357,
      image: '123344444444444',
      time_checkin: 'qdsha'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
