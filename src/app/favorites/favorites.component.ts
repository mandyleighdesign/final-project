import { Component, OnInit } from '@angular/core';
import { uniqueArray, addFavorite, removeFavorite, isFavorited } from "../home/home.component";
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  locations = [];

  constructor(private dataService: DataService) { }

  addFavorite(locationId) {
    addFavorite(locationId)
   }
 
   removeFavorite(locationId) {
     removeFavorite(locationId)
   }
 
   isFavorited(locationId) {  
    return isFavorited(locationId);
   }
 
   toggleFavorite(locationId) {
     this.isFavorited(locationId) ? this.removeFavorite(locationId) : this.addFavorite(locationId);
   }

   loadFavorites() {
    const favorites = (localStorage.favorites && JSON.parse(localStorage.favorites)) || [];

  
    favorites.forEach(locationId => {
      this.dataService.getLocation(locationId).subscribe((res: any) => {
        const locationObj = Object.assign(res.result[locationId], { location_id: locationId });
        this.locations.push(locationObj);
      })  
   });
   console.log(this.locations)
   this.locations = uniqueArray(this.locations);
  }
  ngOnInit() {
    this.loadFavorites();
    // this.favorites = this.data.favorites;
  }

//   removeFavorite = (locationIndex) => {
//     this.data.removeFavorite(this.favorites[locationIndex]);
//     this.favorites = this.favorites.filter((item, index) => index !== locationIndex);
//   };
// }

}
