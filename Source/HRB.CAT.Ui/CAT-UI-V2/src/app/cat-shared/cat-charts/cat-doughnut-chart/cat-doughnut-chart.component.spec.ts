import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDoughnutChartComponent } from './cat-doughnut-chart.component';

describe('CatDoughnutChartComponent', () => {
  let component: CatDoughnutChartComponent;
  let fixture: ComponentFixture<CatDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
