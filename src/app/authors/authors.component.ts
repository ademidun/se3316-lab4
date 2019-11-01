import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorService } from "../author.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {

  title = "Authors";
  titleDescription = "Title for the authors page.";
  authors: any;
  constructor( authorService: AuthorService) {
    this.authors = authorService.getAuthors(); }

  ngOnInit() {
  }

}
