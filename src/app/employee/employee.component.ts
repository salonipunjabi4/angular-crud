import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeList: any = [];
  constructor(private _employeeService: EmployeeService, private _router: Router){
   
    this._employeeService.getAllEmployees().subscribe(result => {
      this.employeeList = result;
      console.log(result);
    });
  }

  // loadEmployees(){
  //   this._employeeService.getAllEmployees().subscribe(result => {
  //     this.employeeList = result;
  //     console.log(result);
  //   });
  // }

  

  deleteEmployee(id: number){
    this._employeeService.deleteEmployee(id).subscribe(() => {
      console.log("Employee deleted successfully");
      //this.loadEmployees();
       window.location.reload();
      // this._router.navigate(['employees']);
      //this.employeeList = this.employeeList.filter((employee: Employee) => employee.id !== id);
  })
  }


}
