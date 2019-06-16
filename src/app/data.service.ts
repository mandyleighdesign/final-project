import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http: HttpClient) { }

  baseApiUrl = "https://api.earth911.com/earth911.searchMaterialsByProximity";
  apiKey = "6b3a1bd08e2cb59e";

  //google location search

  getCoordinates(city) {
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBftPuIY280Sz5nvoGn1zMJjFKZlxxwJZs`);
  }

  //earth 911

  getUsers({lat, lng}) {
    return this._http.get<User[]>(`${this.baseApiUrl}?api_key=${this.apiKey}&latitude=${lat}&longitude=${lng}`);
  }

}