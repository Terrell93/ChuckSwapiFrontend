import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ChuckNorrisService} from '../../services/chuck-norris/chuck-norris.service';
import {JokeResponse} from '../../interfaces/api-models';

@Component({
  selector: 'app-category-joke',
  templateUrl: './category-joke.component.html',
  styleUrls: ['./category-joke.component.css']
})
export class CategoryJokeComponent implements OnInit {

  public joke: JokeResponse;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {categoryData: string}, private service: ChuckNorrisService, public dialog: MatDialog) {
    this.getJoke(this.data.categoryData);
  }
  ngOnInit(): void {
  }

  getJoke(category: string): void {
    this.service.getJokes(category).subscribe(response => {
      this.joke = response.value;
    }, error => {
      console.log(`Could not load categories`);
    });
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }
}
