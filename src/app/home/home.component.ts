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

  // city: String
  // selectedMaterial: String
  // location: Location;

  city: String;
  selectedMaterial: String;
  locationName: any[];
  locations = [];



  
  constructor(private dataService: DataService) {}

  // findMaterials() {
  //   this.dataService.getCoordinates(this.city).subscribe(locationData => {
  //     const latLng = locationData['results'][0].geometry.location;
  //     this.dataService.getUsers(latLng).subscribe(res => {
  //       const filteredMaterials = res['result'].filter(m => m.description.toLowerCase().includes(this.selectedMaterial.toLowerCase()));
  //       console.log('filtered materialsss', filteredMaterials);
  //     })
  //   })
  // }

  findMaterials() {
    this.dataService.getCoordinates(this.city).subscribe(locationData => {
      const latLng = locationData['results'][0].geometry.location;
      console.log(latLng);
      this.dataService.getLocations(latLng).subscribe((res: any) => {
        this.locations = [];
        res.result.forEach(location => {
          this.dataService.getLocation(location.location_id).subscribe((res: any) => {
            console.log(res.result)
            this.locations.push(res.result);
          })
          // console.log(this.locations);
        }) 
        
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