import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})

export class EmployeeAddComponent{

  employeeFrom!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.employeeFrom = this.formBuilder.group({
      // n aceita campos vazios
      employeeName: ['', Validators.required], 
      jobRole: ['', Validators.required], 
      salary: ['', Validators.required], 
      birth: ['', Validators.required], 
      employeeRegistration: ['', Validators.required], 
    })
  }


}
