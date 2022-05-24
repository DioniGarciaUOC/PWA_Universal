import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.interface';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  constructor(private http: HttpClient) {}

  getAllBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers');
  }

  getBeerById(id: string): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers/' + id);
  }
}
