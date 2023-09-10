/**
 * arquivo: controllers/employee.contoller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 */ 

const db = require('../config/database.js');

// ==> Método responsável por criar um novo 'Employee'
exports.createEmployee = async(req, res) => {
  const { employeeName: name, jobRole: job_role, salary: salary, birth: birth, employeeRegistration: employee_registration } = req.body;
  // eslint-disable-next-line no-unused-vars
  const { rows } = await db.query(
    "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES($1, $2, $3, $4, $5);",
    [name, job_role, salary, birth, employee_registration]
  );

  res.status(201).send({
    message: 'Employee added successfully!',
    body: {
      employee: { name, job_role, salary, birth, employee_registration }
    }
  })
}

// ==> Método responsável por listar todos os 'Employees'
exports.listAllEmployees = async (req, res) => {
  const response = await db.query(`SELECT 
                                    employee_id,
                                    name, 
                                    job_role, 
                                    salary, 
                                    employee_registration, 
                                    to_char(birth, 'dd/MM/yyyy') as birth 
                                    FROM employee ORDER BY name asc`
                                  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por listar um determinado 'Employee' por id
exports.findEmployeeById = async(req, res) =>{
  try{
    const employeeId = req.params.id
    const response = await db.query(`SELECT 
                                      employee_id,
                                      name, 
                                      job_role, 
                                      salary, 
                                      employee_registration, 
                                      to_char(birth, 'yyyy-MM-dd') as birth 
                                    FROM employee  
                                    WHERE employee_id = $1`, [employeeId])
    res.status(200).send(response.rows[0])
  } catch(error){
    console.log(error)
  }
}

// ==> Método responsável por atualizar determinado 'Employee' por id
exports.updateEmployeeById = async(req, res) =>{
  const employeeId = req.params.id
  console.log('to indo',employeeId)
  const { name, job_role, salary, birth, employee_registration } = req.body
  // eslint-disable-next-line no-unused-vars
  const response = await db.query(
    "UPDATE employee SET name = $1, job_role = $2, salary = $3, birth = $4, employee_registration = $5 WHERE employee_id = $6;",
    [name, job_role, salary, birth, employee_registration, employeeId]
  );
  res.status(200).send({
    message: 'Employee Updated Successfully!',
    body: {
      employee: { employeeId, name, job_role, salary, birth, employee_registration }
    }
  })
}

//  ==> Método responsável por deletar 'Employee' por id
exports.deleteEmployeeById = async(req, res) =>{
  const employeeId = req.params.id
  await db.query('DELETE FROM employee WHERE employee_id = $1', [employeeId])

  res.status(200).send({ message: "Employee deleted successfully!" });
}