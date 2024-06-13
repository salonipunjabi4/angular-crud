import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:8081/getAllData");
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>("http://localhost:8081/getById/" + id);
  }

  addNewEmployee(employee: Employee):Observable<Employee>{
    console.log("From add employee service" +employee);
    return this.http.post<Employee>("http://localhost:8081/saveData", employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>("http://localhost:8081/deleteById/" + id);
  }
}
