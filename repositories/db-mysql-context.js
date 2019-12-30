const Sequelize = require('sequelize');

const DataContext = function (config) {
    const sequelize = new Sequelize(config.database, config.username, config.password, config);
    const Student = sequelize.import('../models/student');
    const Lesson = sequelize.import('../models/lesson');
    const LearningWeek = sequelize.import('../models/learning_week');
    const StudentPresence = sequelize.import('../models/student_presence');

    return {
        Student,
        Lesson,
        LearningWeek,
        StudentPresence
    }
}

module.exports = DataContext