import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  city: String
  selectedMaterial: String
  
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
      this.dataService.getUsers(latLng).subscribe((res: any) => {
        console.log(res.result);
      })
    })
  }
}