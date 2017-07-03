import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

    getAuthors(){
      
    return ["João", "Ze", "Luis"];
  }

}
