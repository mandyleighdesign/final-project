import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final-project';
  users$: Place[];

  constructor(private dataService: DataService) {}

  ngOnInit() { 
    return this.dataService.getPlaces().subscribe(data => this.users$ = data); 
  }
}
