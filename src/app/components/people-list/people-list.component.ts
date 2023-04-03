import { Component, OnInit } from '@angular/core';
import {ChuckNorrisService} from '../../services/chuck-norris/chuck-norris.service';
import {SwapiService} from '../../services/swapi/swapi.service';
import {GetCharacterResponse, JokeResponse} from '../../interfaces/api-models';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  public people: GetCharacterResponse[];
  constructor(private service: SwapiService) {
    this.getPeople();
  }

  ngOnInit(): void {
  }

  getPeople(): void {
    this.service.getPeople().subscribe(response => {
      this.people = response;
    }, error => {
      console.log(`Could not load categories`);
    });
  }

}
