const LearningWeek = require('../models').learning_weeks
const Lesson = require('../models').lessons
const StudentPresence = require('../models').student_presences
const Student = require('../models').students
const Sequelize = require('sequelize')
const nodeExcel = require('excel-export')
const XlsExport = require('xlsexport')
module.exports = class {
	constructor(db_context) {
		this.db_context = db_context;
		this.LearningWeek = db_context.LearningWeek;
		this.Student = db_context.Student;
		this.Lesson = db_context.Lesson;
		this.StudentPresence = db_context.StudentPresence;
	}

	create(req, res) {
		let att_info = req.body;
		const learning_semester = att_info.learning_semester;
		const week = att_info.week;
		let condition = Object.assign({}, { week, learning_semester });
		LearningWeek.findAll({
			where: condition,
		}).then(learningWeeks => {
			if (learningWeeks != null) {
				console.log('******', learningWeeks[0].dataValues.id);
				const learning_week_id = learningWeeks[0].dataValues.id;
				const name = att_info.lesson;
				const lesson_time = att_info.lesson_time;
				condition = Object.assign({}, { learning_week_id, name, lesson_time })
				Lesson.findAll({
					where: condition
				}).then(lessons => {
					if (lessons != null) {
						console.log(att_info);
						Student.create({
							first_name: att_info.first_name,
							last_name: att_info.last_name,
							student_id: att_info.student_id,
							image: att_info.image,
							time_checkin: att_info.time_checkin
						}).then(students => {
							StudentPresence.create({
								student_id: students.dataValues.id,
								lesson_id: lessons[0].dataValues.id
							}).then(studentPresence => {
								res.send(studentPresence);
								res.end();
							})
						})
					} else {
						res.send(null);
						res.end();
					}
				})
			} else {
				res.send(null);
				res.end();
			}
		}).catch(err => {
			let error = err.message;
			console.log('......', error);
			res.status(400).send(error);
		})
	}

	async export(req, res) {
		const conf = {};
		let arr_students = [];
		const learning_semester = req.body.learning_semester;
		const week = req.body.week;
		const name = req.body.lesson;
		const lesson_time = req.body.lesson_time;

		let condition = Object.assign({}, { week, learning_semester });
		LearningWeek.findAll({
			where: condition
		}).then(async function (learningWeeks) {
			if (learningWeeks != null) {
				const learning_week_id = learningWeeks[0].dataValues.id;
				console.log('----', name, lesson_time);
				condition = Object.assign({}, { learning_week_id, name, lesson_time });
				await Lesson.findAll({
					where: condition
				}).then(async function (lesson) {
					console.log('----', lesson);
					if (lesson != null) {
						const lesson_id = lesson[0].dataValues.id;
						condition = Object.assign({}, { lesson_id });
						await StudentPresence.findAll({
							where: condition
						}).then(async function (students) {
							if (students != null) {
								for (let i = 0; i < students.length; i++) {
									let id = students[i].dataValues.id;
									condition = Object.assign({}, { id })
									await Student.findAll({
										where: condition
									}).then(student => {
										if (student != null) {
											console.log('::::::', student[0].dataValues);
											let first_name = student[0].dataValues.first_name;
											let last_name = student[0].dataValues.last_name;
											let student_id = student[0].dataValues.student_id;
											let image = student[0].dataValues.image;
											let time_checkin = student[0].dataValues.time_checkin;
											console.log('......', student[0].dataValues.first_name);
											let a = Object.assign({}, { i, first_name, last_name, student_id, image, time_checkin });
											arr_students.push(a);
										}
									})
								}
								setTimeout(() => {
									console.log(':::------', arr_students);
									res.send(arr_students);
									res.end();
								}, 2000);
							}
						}).catch(err => {
							let error = err.message;
							res.status(400).send(error);
						})
					}
				}).catch(err => {
					let error = err.message;
					res.status(400).send(error);
				})
			}

		}).catch(err => {
			let error = err.message;
			res.status(400).send(error);
		})
	}
}