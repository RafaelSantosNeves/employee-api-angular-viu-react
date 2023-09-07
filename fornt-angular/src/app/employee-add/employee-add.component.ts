import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';
import Employee from '../Employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})

export class EmployeeAddComponent{

  employeeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService){
    this.createForm();
  }

  createForm(){
    this.employeeForm = this.formBuilder.group({
      // n aceita campos vazios
      employeeName: ['', Validators.required], 
      jobRole: ['', Validators.required], 
      salary: ['', Validators.required], 
      birth: ['', Validators.required], 
      employeeRegistration: ['', Validators.required], 
    })
  }

  /* Ação botao para adicionar novo employee */
  createNewEmployee(employeeName: string, jobRole: string, salary: any, birth: any, employeeRegistration: any){
    this.employeeService.createNewEmployee(employeeName, jobRole, salary, birth, employeeRegistration)
 
    Swal.fire({
      title: 'Employee added Successfully',
      showConfirmButton: true,
      timer: 1500,
      icon: 'success'
    })

    this.employeeForm.reset();
  }
}
