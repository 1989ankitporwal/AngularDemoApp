import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {
  employeeList: any[];
  constructor() {
    this.employeeList = [
      { name: 'Mohan', address: 'Noida', salary: 1000, joining: new Date()},
      { name: 'Ankit', address: 'Gurgaon', salary: 1200, joining: new Date()},
      { name: 'Madhav', address: 'Delhi', salary: 1300, joining: new Date()},
      { name: 'Pavan', address: 'Gr. Noida', salary: 1800, joining: new Date()},
    ];
   }

  ngOnInit(): void {
  }

}
