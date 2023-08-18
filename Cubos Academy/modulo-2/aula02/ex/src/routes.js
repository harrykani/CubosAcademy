const express = require('express');
const { 
    listInstructors, getInstructor, addInstructor, replaceInstructor, patchInstructor, deleteInstructor,
    addLesson, listLessons, detailedLesson, getInstructorLessons
 } = require('./controllers/instructors');
const routes = express();

routes.get('/instructors', listInstructors);
routes.get('/instructors/:id', getInstructor);
routes.post('/instructors', addInstructor);
routes.put('/instructors/:id', replaceInstructor);
routes.patch('/instructors/:id/status', patchInstructor);
routes.delete('/instructors/:id', deleteInstructor);

routes.get('/aulas', listLessons);
routes.get('/aulas/:id', detailedLesson);
routes.get('/instructors/:id/aulas', getInstructorLessons);
routes.post('/instructors/:id/aulas', addLesson);



module.exports = routes;