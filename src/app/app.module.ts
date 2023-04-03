import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {PeopleListComponent} from './components/people-list/people-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryJokeComponent} from './components/category-joke/category-joke.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from './components/search/search.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    PeopleListComponent,
    CategoryJokeComponent,
    MainPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
