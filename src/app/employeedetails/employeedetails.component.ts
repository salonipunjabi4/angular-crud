import { Component } from '@angular/core';
import { Employee } from '../model/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {
  id:any;
  employeeDetail: Employee = new Employee();

  constructor(private router: ActivatedRoute, private employeeService: EmployeeService){
    this.id = this.router.snapshot.paramMap.get("id");
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(result => {
      this.employeeDetail = result;
      console.log(result);
    })
  }
}
