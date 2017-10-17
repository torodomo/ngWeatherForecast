import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import { Observable } from 'rxjs/Observable'; // <- gave error is only import rxjs
import 'rxjs/add/operator/map'; // <- add map function
import 'rxjs/add/operator/toPromise'; // <- add toPromise function


@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  retrieveApi(cityname) {
    if (cityname) {
      return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a8035a9c9bc7bc5f5431e9ba5cab5a99`)
      .map( data => data.json() ) // <- Apply projection with each value from source.
      .toPromise(); // <- convert observable to promise
    }
  }
}
