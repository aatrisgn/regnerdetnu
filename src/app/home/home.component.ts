import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  IsItRainingText:string ="";

  constructor() { }


  ngOnInit(): void {
  }

  GetCurrentRainingSituation():void{
    console.log("Not implemented yet.");
    this.IsItRainingText = "Lol, no idea. Not working yet. Still running pre-alpha."
  }

}
