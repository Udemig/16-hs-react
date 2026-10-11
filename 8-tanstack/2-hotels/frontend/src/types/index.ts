export interface Place {
  id: string;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  images: string[];
}

export interface GetPlacesResponse {
  message: string;
  results: number;
  places: Place[];
}

export interface GetPlaceResponse {
  message: string;
  place: Place;
}

export interface FilterParams {
  location?: string;
  title?: string;
  order?: string;
}
