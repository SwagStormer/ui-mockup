import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public filters = {};

  constructor() { }

  ngOnInit() {
    console.log(this.filters)
  }

}
