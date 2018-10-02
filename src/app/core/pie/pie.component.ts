import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-pie',
  // templateUrl: './pie.component.html',
  template: `<footer><p> Alten - Madrid</p></footer>`,
  styles: ['footer {border-top: 1px solid}']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

