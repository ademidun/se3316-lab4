import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    AuthorsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
