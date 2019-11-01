import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  
  courses: string[];

  constructor() { 
    this.courses = [];
  }

  getCourses(){
    return this.courses;
  }

  addCourse(course: string){
    this.courses.push(course);
  }
}
