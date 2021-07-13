import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 
import { Planet } from '../models'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: any;
  // planets: Planet[] = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.planets = this.service.getPlanets();
    console.log(this.planets)
  }
  moreInfo(event:any): void {
    console.log(event)
  }
}
