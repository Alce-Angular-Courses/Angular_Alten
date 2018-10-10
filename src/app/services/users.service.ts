import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UsersIf, User } from '../models/users.model';

@Injectable( {
  providedIn: 'root'
})

export class UsersService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = environment.urlUsers;
  }

  getUser(n): Observable<UsersIf> {
    const url = this.url + `/${n}`;
    return this.http.get<UsersIf>(url).pipe();
  }

  getUsers(): Observable<Array<UsersIf>> {
    return this.http.get<Array<UsersIf>>(this.url);
  }

  // corresponde a POST
  addUser(data: UsersIf | User): Observable<UsersIf | User>  {
    return this.http.post<UsersIf | User>(this.url, data);
  }

  // corrspondiente al PUT/PATCH
  modifyUser(n, data: UsersIf | User): Observable<UsersIf | User>  {
    const url = this.url + `/${n}`;
    return this.http.patch<UsersIf | User>(url, data);
  }

  deteteUser(n): Observable<UsersIf>  {
    const url = this.url + `/${n}`;
    return this.http.delete<UsersIf>(url);
  }

}
