import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})

export class EmployeeGetComponent implements OnInit {
  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router, ) {}

  ngOnInit(): void {
    // Nunca coloque regra de negócio na função "geral" da classe, sempre faça ela chamar metodos com as regras de negócio.
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  /**
   * Método responsável por excluir um 'Employee' pelo Id
   */
  deleteEmployee(id: any): void {
    // ==> Perguntar se o usuario quer realmente deletar..
    Swal.fire({
      title: 'Are you sure you want to delete the employee?',
      text: 'Watch out! This Employee will be deleted!',
      icon: 'warning',
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEnterKey: true,
      allowEscapeKey: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes! Please, delete it!'
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) { // ==> Detectar se a pergunta acima foi recusada
        Swal.fire({
          title: 'Cancel!',
          text: 'Returning to the Employees List',
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        });
      } else { // Se a pergunta foi aceita entao...
        this.employeeService.deleteEmployee(id).subscribe(res => {
          Swal.fire({
            title: 'Deleted it!',
            text: 'Employee was deleted it!',
            icon: 'success',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            allowEscapeKey: false,
          });
          this.getEmployees(); // ==> Renovar a lista.
        });
      }
    });
  }
}
