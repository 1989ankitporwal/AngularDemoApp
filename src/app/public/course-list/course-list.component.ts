import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: [
  ]
})
export class CourseListComponent implements OnInit {
  courses: Course[] =  [{id: 1, name: 'Advanced C#', description: 'Along with Project', unitPrice: 120}
                          , {id: 2, name: 'Azure', description: 'Along with Project', unitPrice: 160}
                          , {id: 3, name: 'Angular', description: 'Along with Project', unitPrice: 190}
                          , {id: 4, name: 'Micro Services', description: 'Along with Project', unitPrice: 210}];

  constructor() {
    
   }

  ngOnInit(): void {
    // this.courses?.push({id: 1, name: 'Advanced C#'});
    // this.courses?.push({id: 2, name: 'Azure'});
    // this.courses?.push({id: 3, name: 'Angular'});
    // this.courses?.push({id: 4, name: 'Micro Services'});
    //alert(this.courses?.length);
  }

}
