import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRatingsComponent } from './cat-ratings.component';

describe('CatRatingsComponent', () => {
  let component: CatRatingsComponent;
  let fixture: ComponentFixture<CatRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
