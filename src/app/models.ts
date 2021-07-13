export interface Planets { 
  count: number,
  next: string,
  previous: string,
  results: Planet[],
}

export interface Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate:string;
  gravity:string;
  terrain:string;
  surface_water: number
  population: number;
  residents: Resident[];
}

export interface Resident {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: number; 
  gender: string;
  homeworld:string;
}
