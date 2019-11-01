import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBarChartComponent } from './cat-bar-chart.component';

describe('CatBarChartComponent', () => {
  let component: CatBarChartComponent;
  let fixture: ComponentFixture<CatBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
