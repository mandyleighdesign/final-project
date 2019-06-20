import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http: HttpClient) { }

  baseApiUrl = "https://api.earth911.com/earth911";
  apiKey = "6b3a1bd08e2cb59e";

  //google location search

  getCoordinates(city) {
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBftPuIY280Sz5nvoGn1zMJjFKZlxxwJZs`);
  }

  //earth 911

  getLocations({lat, lng}) {
    return this._http.get<Location[]>(`${this.baseApiUrl}.searchLocations?api_key=${this.apiKey}&latitude=${lat}&longitude=${lng}&material_id=5`);
  }

  getLocation(locationId) {
    return this._http.get(`${this.baseApiUrl}.getLocationDetails?api_key=${this.apiKey}&location_id=${locationId}`);
  }

}

