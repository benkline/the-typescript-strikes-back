import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from './models'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlanets(): Promise<Planets[]> {
    return this.http.get('https://swapi.dev/api/planets/')
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
  
  // .subscribe( data => { data })
    //   count: data.count,
    //   next: data.next,
    //   previous: data.previous,
    //   results: data.results,

    // name: data.name,
    // rotation_period: data.rotation_period,
    // orbital_period: data.orbital_period,
    // diameter: data.diameter,
    // climate: data.climate,
    // gravity: data.gravity,
    // terrain: data.terrain,
    // surface_water: data.surface_water,
    // population: data.population

    // return 
    // count:60,
    // next:"https://swapi.dev/api/planets/?page=2",
    // previous:null,
    // results: [{name:"Tatooine"
    //   ,rotation_period:23
    //   ,orbital_period:304
    //   ,diameter:10465
    //   ,climate:"arid"
    //   ,gravity:"1 standard"
    //   ,terrain:"desert"
    //   ,surface_water:1
    //   ,population:200000
    //   ,residents:["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/2/","https://swapi.dev/api/people/4/","https://swapi.dev/api/people/6/","https://swapi.dev/api/people/7/","https://swapi.dev/api/people/8/","https://swapi.dev/api/people/9/","https://swapi.dev/api/people/11/","https://swapi.dev/api/people/43/","https://swapi.dev/api/people/62/"]
    // }]

   // .subscribe(data => {
    //   name: data.name
    //   , height: data.height
    //   ,mass: data.mass
    //   ,hair_color: data.hair_color
    //   ,skin_color: data.skin_color
    //   ,eye_color: data.eye_color
    //   ,birth_year: data.birth_year
    //   ,gender: data.gender
    //   ,homeworld: data.homeworld
    // })

  //  return [{
    // name":"Luke Skywalker"
    // ,"height":"172"
    // ,"mass":"77"
    // ,"hair_color":"blond"
    // ,"skin_color":"fair"
    // ,"eye_color":"blue"
    // ,"birth_year":"19BBY"
    // ,"gender":"male"
    // ,"homeworld":"https://swapi.dev/api/planets/1/"
  // }]
}
