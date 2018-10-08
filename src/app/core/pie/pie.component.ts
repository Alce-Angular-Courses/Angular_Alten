import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']

})
export class PieComponent implements OnInit {
  today: Date;
  constructor() { }

  ngOnInit() {
    this.today = new Date();

  }

}

