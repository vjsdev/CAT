import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatObservationsComponent } from './cat-observations.component';

describe('CatObservationsComponent', () => {
  let component: CatObservationsComponent;
  let fixture: ComponentFixture<CatObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
