/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 */

const router = require('express-promise-router')()
const employeeController = require('../controllers/employee.contoller')

//==> Definindo s rotas do CRUD - 'Employee'

// ==> Rota responsavel por criar um novo 'Colborador': (POST): localhost:3000/api/employees 
router.post('/employees', employeeController.createEmployee)

// ==> Rota  responsá por listar todos os 'Colaboradores': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees)

// ==> Rota rseponsável por listar um determinado 'Colaborador' por id: (GET): localhost:3000/api/employees?id
router.get('/employee/:id', employeeController.findEmployeeById);

// == Rota responsável por atualizar um determinado colaborador por id: (PUT): localhost:3000/api/employees
router.put('/employees/:id', employeeController.updateEmployeeById)

// ==> Rota responsável por deletar/excluir um determinado 'Colaborador(a) por Id: localhost:3000/api/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router