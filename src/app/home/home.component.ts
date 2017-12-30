import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes:any=[
    {
    id:1,
    name:"Hotel"
  },
  {
    id:2,
    name:"Types"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
