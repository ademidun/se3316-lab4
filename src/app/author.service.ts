import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  getAuthors(){
    return ["Thoreau", "Twain", "Rousseau","Franklin"]
  }
  constructor() { }

}
