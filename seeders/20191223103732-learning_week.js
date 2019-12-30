'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_weeks', [{
      week: 1,
      learning_semester: '20191'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_weeks', null, {});
  }
};
