import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { MainComponent } from './main/main.component';
import { SupportComponent } from './support/support.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'about', component:AboutComponent},
  {path: 'addperson', component: AddPersonComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'support', component:SupportComponent, children:[
    {path: '', component:EmployeesupportComponent},
    {path: 'employee-support', component:EmployeesupportComponent},
    {path: 'customer-support', component:CustomersupportComponent},

  ]},
    {path: 'useradd', component:UserAddComponent},
    {path: 'userdetails/:id', component:UserDetailsComponent},
    {path: 'users', component:UsersComponent},

    {path: 'employeeadd', component:EmployeeaddComponent},
    {path: 'employeedetails/:id', component:EmployeedetailsComponent},
    {path: 'employees', component:EmployeeComponent},
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
