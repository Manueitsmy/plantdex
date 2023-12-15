import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/plants');
  }
}


