import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdminLayoutComponent } from './cat-admin-layout.component';

describe('CatAdminLayoutComponent', () => {
  let component: CatAdminLayoutComponent;
  let fixture: ComponentFixture<CatAdminLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAdminLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
