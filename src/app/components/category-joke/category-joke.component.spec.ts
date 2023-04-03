import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryJokeComponent } from './category-joke.component';

describe('CategoryJokeComponent', () => {
  let component: CategoryJokeComponent;
  let fixture: ComponentFixture<CategoryJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
