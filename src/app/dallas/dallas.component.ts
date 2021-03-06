import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  promise;
  cityname = 'dallas';
  humidity = null;
  tempAve = null;
  tempMax = null;
  tempMin = null;
  status = null;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.promise = this._apiService.retrieveApi(this.cityname);
    if (this.promise) {
      this.promise.then( (city) => {
        if (city.main) {
          this.humidity = city.main.humidity;
          this.tempAve = Math.ceil((city.main.temp - 273.15) * 9 / 5 + 32);
          this.tempMax = Math.ceil((city.main.temp_max - 273.15) * 9 / 5 + 32);
          this.tempMin = Math.ceil((city.main.temp_min - 273.15) * 9 / 5 + 32);
          this.status = city.weather[0].main;
        }
      });
    }
  }
}
