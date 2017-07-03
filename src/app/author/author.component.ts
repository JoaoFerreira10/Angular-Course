import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title;
  courses;
  
  constructor(service: AuthorService) { //AuthorService is automatically instanciated

      this.title = "List of Authors";

      this.courses = service.getAuthors();
  }

  ngOnInit() {
  }

}
