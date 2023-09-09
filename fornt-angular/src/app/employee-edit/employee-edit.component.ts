import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent {
  employeeForm!: FormGroup;
  employee:any = {}

  constructor(private route: ActivatedRoute, private router: Router, 
              private formBuilder: FormBuilder, private employeeService: EmployeeService){
    this.createForm();
  }

  /* Método responsavel por criar um formulário ao entrar na página de atualizar funcionario */
  createForm(){
    this.employeeForm = this.formBuilder.group({
      // n aceita campos vazios
      name: ['', Validators.required], 
      job_role: ['', Validators.required], 
      salary: ['', Validators.required], 
      birth: ['', Validators.required], 
      employee_registration: ['', Validators.required], 
    })
  }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.employeeService.editEmployee(params['id']).subscribe((res: any) =>{
        this.employee = res
        
        this.employeeForm.setValue({
          name: this.employee.name,
          job_role: this.employee.job_role,
          salary: this.employee.salary,
          birth: this.employee.birth,
          employee_registration: this.employee.employee_registration
        })
      })
    })
  }

  /* Método responsável pr atualizar o employee por id atrav´´es da action do botao 'update' */

 updateEmployee(name: string, job_role: string, salary: any, birth: any, employee_registration: any){
  this.route.params.subscribe(params =>{
    this.employeeService.updateEmployee(name, job_role, salary, birth, employee_registration, params['id'])
    
    /* Depois que o user clicar no botao update sera redirecionado para a pagina de listar employees */
    this.router.navigate(['employee'])

    Swal.fire({
      title: 'Employee update Successfully',
      showConfirmButton: true,
      timer: 1500,
      icon: 'success'
    })
  })
    



    this.employeeForm.reset();
  } 
}

