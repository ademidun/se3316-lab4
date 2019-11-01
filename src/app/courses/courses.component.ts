import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CourseService } from "../course.service";
import { AutoGrowDirective } from "../auto-grow.directive";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {

  title = "Add a Course";
  titleDescription = "Title for the Courses page.";
  courseService: CourseService;
  courses: any;

  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  addCourse(courseInput:HTMLInputElement){
    this.courseService.addCourse(courseInput.value);
    courseInput.value = "";
    this.courses = this.courseService.getCourses();
  }

  ngOnInit() {
  }

}
