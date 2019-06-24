import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { take } from 'rxjs/operators';

export const uniqueArray = a => a.filter(function(item, pos) {
  return a.indexOf(item) == pos;
})

export const addFavorite = (locationId) => {
  const favorites = (localStorage.favorites && JSON.parse(localStorage.favorites)) || [];

  const newFav = uniqueArray(favorites.concat([locationId]));
  localStorage.setItem("favorites", JSON.stringify(newFav));
}

export const removeFavorite = (locationId) => {
  const favorites = (localStorage.favorites && JSON.parse(localStorage.favorites)) || [];
  const newFav = uniqueArray(favorites.filter(curFav => curFav !== locationId));
  localStorage.setItem("favorites", JSON.stringify(newFav));
}

export const isFavorited = (locationId) => {
  const favorites = (localStorage.favorites && JSON.parse(localStorage.favorites)) || [];
  return  favorites.includes(locationId) ? true : false;
}

export interface Location {
  curbside: boolean;
  description: string;
  distance: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  city: String;
  //selectedMaterial: String;
  locations = [];
  storedLocations = [];
  selectedMaterial: string = "";
  constructor(private dataService: DataService) {
    //localStorage.favorites = localStorage.favorites || [];
  }

  // getMaterials()
  // {
  //  let data = this.locations.map(x => {return Object.values(x)[0] as any});
  //  console.log ("filtered materials are",data.filter(x => x.materials.filter(y=> {y.description.includes(this.selectedMaterial)})));
  // }


  findMaterials() {
    this.dataService.getCoordinates(this.city).subscribe(locationData => {
      const latLng = locationData['results'][0].geometry.location;
      const materialIds = this.selectedMaterial.split(',').map(cur => parseInt(cur, 10));
      console.log(latLng);
      this.dataService.getLocations(latLng, materialIds).subscribe((res: any) => {
        this.storedLocations = res.result;
        console.log("the global", this.storedLocations);
        this.locations = [];
        res.result.forEach(location => {
          this.dataService.getLocation(location.location_id).subscribe((res: any) => {
            console.log(res.result)
            const locationObj = Object.assign(res.result[location.location_id], { location_id: location.location_id });
            this.locations.push(locationObj);
          })
          
        })
        // console.log("the locations are",this.locations, "the global location are ", this.globalLocations);
      })
    })
  }

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
  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth'});
  // }

  //push locations 
  //use filter, define functions that filter array
  //use dropdown to change value and filter based off of value 
  //remove google API
} 