/* 
arquivo: app/employee.service.ts
descrição: arquivo responsável por realizar as transições de request entre o Back -> Front 
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Employee from './Employee';
/* import Employee from './Employee';
 */

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  /* vindo do meu back end */
  url = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {

  };

  /* Método responsável por criar um 'New Employee' */
  createNewEmployee(employeeName: string, jobRole: string, salary: any, birth: any, employeeRegistration: number) {
    const employee = {
      employeeName,
      jobRole,
      salary,
      birth,
      employeeRegistration
    };
    /* (POST - URL no Back End): http://localhost:3000/api/employee */
    this.http.post(`${this.url}/employees`, employee).subscribe(res => console.log('Feito'))
  };

  /* Método responsável por listar todos os 'Employees' */
  getEmployees(){
    // => (GET - url no Back-End): http://localhost:3000/api/employees
    return this.http.get<Employee[]>(`${this.url}/employees`); // Certifique-se de tipar a resposta corretamente
    console.log(Employee)
  }


}
