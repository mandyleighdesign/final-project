import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http: HttpClient) { }

  apiUrl = "https://jsonplaceholder.typicode.com/users";

  getUsers() { return this._http.get<User[]>(this.apiUrl); }
}
