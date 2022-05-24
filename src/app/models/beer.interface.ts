export interface Volume {
  value: number;
  unit: string;
}

export interface Beer {
  id: string;
  name: string;
  description: string;
  volume: Volume;
  food_pairing: string[];
  tagline: string;
  first_brewed: string;
  image_url: string;
}
