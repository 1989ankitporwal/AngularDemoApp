import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [
  ]
})
export class CoursesComponent implements OnInit {
  bstatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  // ngOnDestroy(): void {
  //   this.bstatus = false;
  // }

}
