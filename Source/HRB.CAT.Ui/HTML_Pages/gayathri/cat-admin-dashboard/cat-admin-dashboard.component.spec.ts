import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdminDashboardComponent } from './cat-admin-dashboard.component';

describe('CatAdminDashboardComponent', () => {
  let component: CatAdminDashboardComponent;
  let fixture: ComponentFixture<CatAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
