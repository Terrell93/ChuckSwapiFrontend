import { Component, OnInit } from '@angular/core';
import {ChuckNorrisService} from '../../services/chuck-norris/chuck-norris.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CategoryJokeComponent} from '../category-joke/category-joke.component';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: string[];
  constructor(private service: ChuckNorrisService, private dialog: MatDialog) {
    this.loadCategories();
  }

  ngOnInit(): void {
  }

  openCategory(category: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.minHeight = '100px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.data = {categoryData: category};

    this.dialog.open(CategoryJokeComponent,  dialogConfig);
  }

  loadCategories(): void {
    this.service.getCategories().subscribe(response => {
      this.categories = response;
    }, error => {
      console.log(`Could not load categories`);
    });
  }
}
