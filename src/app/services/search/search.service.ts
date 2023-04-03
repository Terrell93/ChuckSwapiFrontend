import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SearchRequest, SearchResultResponse} from '../../interfaces/api-models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(request: SearchRequest): Observable<any> {
    const response = this.http.get<SearchResultResponse[]>(`${environment.apiUrl}Search?JokeQuery=${request.jokeQuery}&PeopleQuery=${request.peopleQuery}`);
    console.log(response);
    return response;
  }
}
