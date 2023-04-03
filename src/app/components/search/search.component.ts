import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  ChuckNorrisJoke,
  ChuckNorrisSearchResult,
  GetCharacterResponse,
  SearchRequest,
  SearchResultResponse,
  StarWarsSearchResult
} from '../../interfaces/api-models';
import {ChuckNorrisService} from '../../services/chuck-norris/chuck-norris.service';
import {SearchService} from '../../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: SearchService) { }

  public characterResponse: GetCharacterResponse[];
  public chuckNorrisJokes: ChuckNorrisJoke[];
  results: SearchResultResponse[] = [];

  form = this.formBuilder.group({
    jokeValue: [null, [Validators.required]],
    peopleValue: [null, [Validators.required]],
  });
  ngOnInit(): void {
  }

  search(form: FormGroup): void {
    const request: SearchRequest = {
      jokeQuery: form.get('jokeValue').value,
      peopleQuery: form.get('peopleValue').value,
    };

    this.service.search(request).subscribe(data => {
      this.results = data.result;
      for (const result of this.results)
      {
        if (result.api === 'Chuck Norris')
        {
          this.chuckNorrisJokes = result.chuckNorrisSearchResult.result;
        }
        if (result.api === 'Star Wars')
        {
          this.characterResponse = result.starWarsSearchResult.results;
        }
      }
    }, error => {
      console.log(`Could not load categories`);
    });
  }
}
