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
  weatherType:string = "";
  estimatedArea:string = "";
  showEstimatedArea:boolean = false;

  public lat:number = 0;
  public lng:number = 0;

  private currentWeather:WheatherResponseDTO = new WheatherResponseDTO();

  constructor(openWeatherApiClient:OpenWeatherApiClient) {
    this._openWeatherApiClient = openWeatherApiClient;
  }

  ngOnInit(): void {
    this.getLocation();
  }

  GetCurrentRainingSituation():void{
    this.estimatedArea = this.currentWeather.name;
    this.showEstimatedArea = true;
    if(this.currentWeather.weather[0].main === "Rain"){
      this.IsItRainingText = "Oh, yes it is."
      this.weatherType = "rain";
    } else {
      this.IsItRainingText = "Nope. You are in the clear. It seems like it is just "+this.currentWeather.weather[0].description+"...";
      this.weatherType = "not rain";
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this._openWeatherApiClient.GetWeatherByCoordinates(this.lat, this.lng).subscribe(response => {
            this.currentWeather = response;
            console.log(this.currentWeather);
          });
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
