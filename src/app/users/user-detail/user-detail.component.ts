import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'alt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: any;
  userRe: any;

  constructor(
    public activateRoute: ActivatedRoute,
    public usSv: UsersService,
    public router: Router
    ) { }

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params.id;
    this.userRe = this.activateRoute.snapshot.params.re;
    this.usSv.getUser( this.userId).subscribe(
      data => console.log(data)
    );
  }

  onNavigate() {
    this.router.navigateByUrl('/home');

  }

}
