import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatLoginComponent } from './cat-login.component';

describe('CatLoginComponent', () => {
  let component: CatLoginComponent;
  let fixture: ComponentFixture<CatLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
