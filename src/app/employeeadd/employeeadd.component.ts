import { Component } from '@angular/core';
import { Employee } from '../model/Employee';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  employee: Employee = new Employee();
  employeeForm: FormGroup = new FormGroup({
   
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
  });
  submitted:boolean = false;
  constructor(private _formBuilder: FormBuilder, private _employeeService: EmployeeService, private _router: Router){

  }

  ngOnInit(): void{
    this.employeeForm = this._formBuilder.group({
    
      name:['', [Validators.required]],
      email:['', [Validators.required,, Validators.email]],
      salary:['', Validators.required]
    })
  }

  addEmployee(): void{
    this.submitted = true;
    console.log(this.employee);
    if(this.employeeForm.valid){
      console.log("Successfully submitted data...");
      // this._employeeService.addNewEmployee(this.employee).subscribe(result => {
      //   console.log(result);
      // });
      this._employeeService.addNewEmployee(this.employee).subscribe(result =>{
        console.log("From add component ts" +result);
      })
      this._router.navigate(['employees']);
    }
    return;
  }

  reset(): void{
    this.submitted=false;
    this.employeeForm.reset();
  }

}
