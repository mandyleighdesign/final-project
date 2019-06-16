import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final-project';
  users$: User[];

  constructor(private dataService: DataService, public quiz: QuizService) {}

  ngOnInit() { 
    return this.dataService.getUsers().subscribe(data => this.users$ = data); 
  }
}

// , public quiz: QuizService