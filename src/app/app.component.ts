import { Component, OnInit } from '@angular/core';
import { Place } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final-project';
  places: Place[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() { 
    return this.dataService.getPlaces().subscribe(data => this.places = data); 
  }
}
