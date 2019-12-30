var express = require('express');
var router = express.Router();
/* GET home page. */

module.exports = (app, indexController) => {
  app.get('/', (req, res) => {
    res.render('home.ejs', { title: 'Attendance F-Taker' });
  });

  app.get('/photo', (req, res) => {
    res.render('camera.ejs');
  });

  app.get('/student', (req, res) => {
    res.render('profile.ejs');
  });

  app.post('/ajax/attendance', indexController.create);

  app.get('/export', (req, res) => {
    res.render('export_excel.ejs');
  });

  app.post('/excel', indexController.export);
};
