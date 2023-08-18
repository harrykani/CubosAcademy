const dataBase = {
    instructorIdentifier: 3,
    instructors : [
        { id: 1, nome: 'Guido Cerqueira', email: 'guido@email.com', status: true },
        { id: 2, nome: 'Daniel', email: 'dani@email.com', status: true },
    ],
    aulas: [
        { "id": 1, "instructorId": 1 ,"title": "Rotas, Controladores e Intermediarios", "description": "Aprendendo o que são rotas, controladores e intermediários" },
        { "id": 2, "instructorId": 1 ,"title": "API REST", "description": "Criando uma API REST" },
        { "id": 3, "instructorId": 2 ,"title": "Métodos de Array", "description": "Conhecendo métodos de array" },
    ]
}

module.exports = dataBase;