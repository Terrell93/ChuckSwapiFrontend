import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IApiResponse} from '../../interfaces/api-response.interface';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {JokeResponse} from '../../interfaces/api-models';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}Chuck/Categories`);
  }

  getJokes(category: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}Chuck/GetJoke?Category=${category}`);
  }
}
