import { Component, Input, Output, OnInit } from '@angular/core';
import { FavoritesComponent } from '../favorites/favorites.component'
import { take } from 'rxjs/operators';
import { DataService } from '../data.service';

export interface Location {
  curbside: boolean;
  description: string;
  distance: number;
  address: string;
  city: string;
  province: string;
  postal_code: number;
  hours: number;
  phone: number;
}

interface ApiData {
  results: Location[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  list: Location [];
  city: String;
  //selectedMaterial: String;
  locations = [];
  storedLocations = [];
  selectedMaterial: string = "";
  favoritesList: any [];
@Input() location: Location;

  favorites: boolean = false;
  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.DataService.favoritesListArray.subscribe(list => this.favoritesList = list);
  }

  favoritesListThis = () => {
    this.favorites = !this.favorites;
    this.favoritesList.push(this.location);
    this.DataService.addLocation(this.favoritesList)
  }

  // getMaterials()
  // {
  //  let data = this.locations.map(x => {return Object.values(x)[0] as any});
  //  console.log ("filtered materials are",data.filter(x => x.materials.filter(y=> {y.description.includes(this.selectedMaterial)})));
  // }


  findMaterials() {
    this.DataService.getCoordinates(this.city).subscribe(locationData => {
      const latLng = locationData['results'][0].geometry.location;
      console.log(latLng);
      this.DataService.getLocations(latLng).subscribe((res: any) => {
        this.storedLocations = res.result;
        console.log("the global", this.storedLocations);
        this.locations = [];
        res.result.forEach(location => {
          this.DataService.getLocation(location.location_id).subscribe((res: any) => {
            console.log(res.result)
            this.locations.push(res.result[location.location_id]);
          })
          
        })
        // console.log("the locations are",this.locations, "the global location are ", this.globalLocations);
      })
    })
  }

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth'});
  // }

  //push locations 
  //use filter, define functions that filter array
  //use dropdown to change value and filter based off of value 
  //remove google API
} 