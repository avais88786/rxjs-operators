import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './models/User';
import { map } from 'rxjs/operators';
import { Users } from './models/Users';

@Injectable()
export class ApiCallerService {

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<User> {
    return this.http.get<any>(`https://reqres.in/api/users/${userId}`)
      .pipe(
        map(res => this.flatOutUserModel(res.data))
      );
  }

  getUsers(pageNumber: number): Observable<Users> {
    return this.http.get<Users>(`https://reqres.in/api/users?page=${pageNumber}`)
      .pipe(
        map(res => this.flatOutUsersModel(res))
      );
  }

  private flatOutUserModel(response: any): User {
    let user: User = new User();
    user.id = response.id;
    user.firstName = response.first_name;
    user.lastName = response.last_name;
    user.avatar = response.avatar;
    return user;
  }

  private flatOutUsersModel(response: any): Users {
    let users : Users = new Users();
    users.page = response.page;
    users.users = [...(response.data as Array<any>).map(s=> {
      return this.flatOutUserModel(s);
    })];
    return users;
  }
}
