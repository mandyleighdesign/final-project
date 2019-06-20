import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { take } from 'rxjs/operators';

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
  constructor(private dataService: DataService) {}

  // getMaterials()
  // {
  //  let data = this.locations.map(x => {return Object.values(x)[0] as any});
  //  console.log ("filtered materials are",data.filter(x => x.materials.filter(y=> {y.description.includes(this.selectedMaterial)})));
  // }


  findMaterials() {
    this.dataService.getCoordinates(this.city).subscribe(locationData => {
      const latLng = locationData['results'][0].geometry.location;
      console.log(latLng);
      this.dataService.getLocations(latLng).subscribe((res: any) => {
        this.storedLocations = res.result;
        console.log("the global", this.storedLocations);
        this.locations = [];
        res.result.forEach(location => {
          this.dataService.getLocation(location.location_id).subscribe((res: any) => {
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