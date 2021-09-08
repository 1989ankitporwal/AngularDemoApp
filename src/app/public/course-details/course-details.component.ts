import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {
  id: number = 0;
  name: string = '';
  description: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //debugger;
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.name = p.name;
    });

    this.route.queryParams.subscribe((p) => {
      this.description = p.description;
    });
  }

  GoBack(): void{
    this.router.navigate(['/courses']);
  }

}
