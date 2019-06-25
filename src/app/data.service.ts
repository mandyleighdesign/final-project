import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {


  // location = this.location.asObservable();
  constructor(private _http: HttpClient) { }

  baseApiUrl = "https://api.earth911.com/earth911";
  apiKey = "6b3a1bd08e2cb59e";
  favorites: any[] = [];

  //google location search

  getCoordinates(city) {
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBftPuIY280Sz5nvoGn1zMJjFKZlxxwJZs`);
  }


  getLocations({lat, lng}, materialIds) {
    console.log(materialIds); 
    const materialIdsParam = materialIds.reduce((acc, cur) => {
      return acc + `&material_id=${cur}`;
    }, "");
    
    return this._http.get<Location[]>(`${this.baseApiUrl}.searchLocations?api_key=${this.apiKey}&latitude=${lat}&longitude=${lng}${materialIdsParam}`);
  }

  getLocation(locationId) {
    return this._http.get(`${this.baseApiUrl}.getLocationDetails?api_key=${this.apiKey}&location_id=${locationId}`);
  }


//favoriting

  removeFavorite = (locationToRemove) => {
    this.favorites = this.favorites.filter(location => location.locationId !== locationToRemove.locationId);
  }    

  addFavorite = (locationToRemove) => {
      const favorites = this.favorites;
      if (!favorites.find(i => i.locationId.image === locationToRemove.locationId)) {
          favorites.push(location);
      }
  }

  updateFavorites = newList => {
      //this.favorites.next(newList);
  }

}

