'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('lessons', [{
      name: 'Bao mat thong tin',
      lesson_time: 'Monday 8h30',
      learning_week_id: 1
    },
    {
      name: 'Bao mat thong tin',
      lesson_time: 'Thursday 10h15',
      learning_week_id: 1
    },
    {
      name: 'He thong thong tin tren web',
      lesson_time: 'Monday 6h45',
      learning_week_id: 1
    }, {
      name: 'He thong thong tin tren web',
      lesson_time: 'Tuesday 14h15',
      learning_week_id: 1
    }, {
      name: 'He thong thong tin tren web',
      lesson_time: 'Friday 10h15',
      learning_week_id: 1
    },
    {
      name: 'Tieng nhat 7',
      lesson_time: 'Thursday 8h30',
      learning_week_id: 1
    }, {
      name: 'Tieng nhat 7',
      lesson_time: 'Friday 8h30',
      learning_week_id: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('lessons', null, {});
  }
};
