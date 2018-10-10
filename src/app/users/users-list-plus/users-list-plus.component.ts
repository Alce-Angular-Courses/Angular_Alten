import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'alt-users-list-plus',
  templateUrl: './users-list-plus.component.html',
  styleUrls: ['./users-list-plus.component.css']
})
export class UsersListPlusComponent implements OnInit {

  aUsuarios: Array<User>;
  idUser: number;
  name: string;
  userName: string;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.aUsuarios = [];
  }

  onBuscar() {
    this.aUsuarios = [];
    if (this.idUser) {
      this.usersService.getUser(this.idUser)
      .subscribe(
        (res) => { this.aUsuarios.push(res); }
      );
    } else {
      this.usersService.getUsers().subscribe(
        (res) => {this.aUsuarios = res; }
      );
    }
  }

  onBorrar() {
    if (!this.idUser) { return; }
    this.usersService.deteteUser(this.idUser).subscribe(
      (res) => console.log(res)
    );
  }

  onNuevo() {
    const data = {
      name: this.name, username: this.userName
    };
    this.usersService.addUser(data).subscribe(
      res => console.log(res)
    );

  }

  onModificar() {
    if (!this.idUser) { return; }
    const data = {
      name: this.name,
      username: this.userName
    };
    this.usersService.modifyUser(this.idUser, data).subscribe(
      res => console.log(res)
    );
  }
}
