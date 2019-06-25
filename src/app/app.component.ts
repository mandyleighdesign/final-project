import { Component, OnInit } from '@angular/core';
import { Location } from './location.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'final-project';

 
  location$: Location[];


  constructor(private dataService: DataService) {
  }

  ngOnInit() { 
    // return this.dataService.getUsers().subscribe(data => this.users = data); 
  }

}
