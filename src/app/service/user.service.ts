import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + id);
  }

  addNewUser(user: User):Observable<User>{
    console.log(user);
    return this.http.post<User>("https://jsonplaceholder.typicode.com/users/", user);
  }
}
