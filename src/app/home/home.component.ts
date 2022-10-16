import { Component, OnInit } from '@angular/core';
import { WheatherResponseDTO } from '../Models/WeatherResponseDTO';
import { OpenWeatherApiClient } from '../Services/OpenWeatherApiClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OpenWeatherApiClient]
})
export class HomeComponent implements OnInit {

  private _openWeatherApiClient:OpenWeatherApiClient;
  IsItRainingText:string ="";
  name = 'Angular';
  public lat:number = 0;
  public lng:number = 0;

  constructor(openWeatherApiClient:OpenWeatherApiClient) {
    this._openWeatherApiClient = openWeatherApiClient;
  }

  ngOnInit(): void {
    this.getLocation();
  }

  GetCurrentRainingSituation():void{
    console.log("Not implemented yet.");
    this.IsItRainingText = "Lol, no idea. Not working yet. Still running pre-alpha."
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this._openWeatherApiClient.GetWeatherByCoordinates(this.lat, this.lng);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
