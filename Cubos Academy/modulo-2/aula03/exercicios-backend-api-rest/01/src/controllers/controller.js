const alunos = require('../data/students');

const listStudents = (req, res) => {
    return res.status(200).send(alunos);
};

const getStudent = (req, res) => {
    const { id } = req.params;

    if (id != Number(id)) {
        return res.status(400).json({ "mensagem": "O id do aluno deve ser um número." })
    }

    const foundStudent = alunos.find((student) => {
        return student.id === Number(id);
    });

    if (!foundStudent) {
        return res.status(404).json({ "mensagem": "O id do aluno não foi encontrado." });
    }

    return res.status(200).send(foundStudent);
};

const addStudent = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if ( nome !== String(nome) || nome === '' || nome.trim() === '' || !nome ) {
        return res.status(400).json({ "mensagem": "O nome é inválido." });
    };

    if ( sobrenome !== String(sobrenome) || sobrenome === '' || sobrenome.trim() === '' || !sobrenome ) {
        return res.status(400).json({ "mensagem": "O sobrenome é inválido." });
    };

    if ( idade !== Number(idade) || !idade ) {
        return res.status(400).json({ "mensagem": "A idade é inválida." });
    };

    if ( curso !== String(curso) || curso === '' || curso.trim() === '' || !curso ) {
        return res.status(400).json({ "mensagem": "O curso é inválido." });
    };

    let studentID = alunos.length;

    if (alunos === []) {
        studentID = 0;
    }

    const student = {
        id: (studentID + 1),
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(student);

    return res.status(201).send();
};

const removeStudent = (req, res) => {
    const { id } = req.params;

    if (id != Number(id)) {
        return res.status(400).json({ "mensagem": "O id do aluno deve ser um número." })
    }

    const foundStudent = alunos.find((student) => {
        return student.id === Number(id);
    });

    const studentIndex = alunos.indexOf(foundStudent);

    if (!foundStudent) {
        return res.status(404).json({ "mensagem": "O id do aluno não foi encontrado." });
    }

    alunos.splice(studentIndex, 1);

    return res.status(200).send(alunos);
};

module.exports = {
    listStudents, getStudent, addStudent, removeStudent,
}