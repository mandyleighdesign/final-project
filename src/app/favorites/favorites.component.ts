import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../home/home.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
  list: string;
  favoritesList: Location[];
  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.DataService.favoritesListArray.subscribe(list => this.favoritesList = list);
  }

}
