import { Component } from '@angular/core '
@Component({
  selector: 'courses', //<courses> "courses"
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>

    `
} // now we have to register our component in a Module

) //this is a decorator function
export class CoursesComponent{
  title = "List of courses";
  course = ["course1", "course2", "course3"];

}
