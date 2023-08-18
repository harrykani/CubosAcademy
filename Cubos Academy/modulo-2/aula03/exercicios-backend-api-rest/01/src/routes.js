const express = require('express');
const { listStudents, getStudent, addStudent, removeStudent } = require('./controllers/controller.js');
const routes = express();

routes.get('/alunos', listStudents);
routes.get('/alunos/:id', getStudent);
routes.post('/alunos', addStudent);
routes.delete('/alunos/:id', removeStudent);

module.exports = routes;