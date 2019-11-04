import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHomeComponent } from './cat-home.component';

describe('CatHomeComponent', () => {
  let component: CatHomeComponent;
  let fixture: ComponentFixture<CatHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
