import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNavbarComponent } from './cat-navbar.component';

describe('CatNavbarComponent', () => {
  let component: CatNavbarComponent;
  let fixture: ComponentFixture<CatNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
