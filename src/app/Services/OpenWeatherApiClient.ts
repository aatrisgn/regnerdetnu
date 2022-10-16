import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WheatherResponseDTO } from '../Models/WeatherResponseDTO';

@Injectable()
export class OpenWeatherApiClient {
    private _httpClient:HttpClient

    constructor(private httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public GetWeatherByCoordinates(lattitude:number, longitude:number) : WheatherResponseDTO {
        let weatherResponse:WheatherResponseDTO;
        let queryString:string;

        queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=de7f7fe57c69dced8f28fa28a3b2a4e2&units=metric`

        //let some = this._httpClient.jsonp(queryString, 'callback').subscribe((data:WheatherResponseDTO) => weatherResponse = data);

        let some = this._httpClient.jsonp(queryString, 'callback').pipe();

        console.log(some);

        weatherResponse = new WheatherResponseDTO();

        return weatherResponse;
    }
}
