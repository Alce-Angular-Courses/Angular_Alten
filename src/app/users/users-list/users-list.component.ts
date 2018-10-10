import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/users.model';


@Component({
  selector: 'alt-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  aUsuarios: Array<User>;
  url: string;
  idUser: number;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aUsuarios = [];
  }

  onBuscar() {
    this.url = environment.urlUsers;
    this.aUsuarios = [];
    if (this.idUser) {
      this.url += `/${this.idUser}`;
    }
    this.http.get(this.url).toPromise().then(
      (response: any) => {
        if (!Array.isArray(response)) {
          this.aUsuarios.push(response);
        } else {
          this.aUsuarios = response;
        }
        console.dir(this.aUsuarios);
      }
    );
  }
}
