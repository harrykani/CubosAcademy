const { instructors, aulas } = require('../data');
let { instructorIdentifier } = require('../data')

const listInstructors = (req, res) => {
    return res.json(instructors);
};

const getInstructor = (req, res) => {
    const { id } = req.params;

    const foundInstructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });
    
    if (!foundInstructor) {
        return res.status(404).json({ mensagem: 'Instrutor não existe'});
    };

    return res.json(foundInstructor);
};

const addInstructor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome || !email) {
       return res.status(400).json({ mensagem: "O nome é obrigatório" })
    };

    const instructor = {
        id: instructorIdentifier++,
        nome,
        email,
        status: status ?? true
    };

    instructors.push(instructor);

    return res.status(201).json({ instructor });
};

const replaceInstructor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome || !email) {
        return res.status(404).json({ mensagem: "Está faltando algum dado."})
    };

    if (status === undefined) {
        return res.status(404).json({ mensagem: "Status é obrigatório."});
    };

    const foundInstructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });
    
    if (!foundInstructor) {
        return res.status(404).json({ mensagem: 'Instrutor não existe'});
    };

    const instructor = {
        id: Number(id),
        nome,
        email,
        status: status
    };

    instructors.splice((id - 1), 1, instructor);

    return res.status(203).send();
};

const patchInstructor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (status === undefined) {
        return res.status(404).json({ mensagem: "Status é obrigatório."});
    };

    const foundInstructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });
    
    if (!foundInstructor) {
        return res.status(404).json({ mensagem: 'Instrutor não existe'});
    };

    foundInstructor.status = status;

    res.status(204).send();
};

const deleteInstructor = (req, res) => {
    const { id } = req.params;

    const foundInstructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });
    
    if (!foundInstructor) {
        return res.status(404).json({ mensagem: 'Instrutor não existe'});
    };

    const instructorIndex = instructors.indexOf(foundInstructor);

    instructors.splice(instructorIndex, 1);


    return res.status(204).send();
};

const addLesson = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (title !== String(title) || description !== String(description)) {
        return res.status(301).json({ mensagem: "confira os dados da aula" })
    };

    if (aulas === []) {
        const lessons = { id: 1, instructorId: Number(id), titulo: title, descricao: description };
        aulas.push(lessons);
        return res.status(201).send();
    };

    const lessons = { id: (aulas.length + 1), instructorId: Number(id), titulo: title, descricao: description }
    aulas.push(lessons);

    return res.status(201).send();
};

const listLessons = (req, res) => {

    return res.status(200).send(aulas);
};

const detailedLesson = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    return res.status(200).send(aula);
};

const getInstructorLessons = (req, res) => {
    const { id } = req.params;

    const aula = aulas.filter((aula) => {
        return aula.instructorId === Number(id);
    });

    return res.status(200).send(aula);
};

module.exports = {
    listInstructors, getInstructor, addInstructor, replaceInstructor, patchInstructor, deleteInstructor,
    addLesson, listLessons, detailedLesson, getInstructorLessons
};

