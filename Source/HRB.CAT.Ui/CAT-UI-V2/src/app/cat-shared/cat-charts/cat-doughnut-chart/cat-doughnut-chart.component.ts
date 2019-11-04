import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-doughnut-chart',
  templateUrl: './cat-doughnut-chart.component.html',
  styleUrls: ['./cat-doughnut-chart.component.css']
})
export class CatDoughnutChartComponent implements OnInit {

  public doughnutChartOptions = {
    legend: {
      position: 'right'
    }
  };
  public doughnutChartLabels = ['Audit not requested', 'Audit in progress', 'Audit completed'];
  public doughnutChartData = [5, 4, 8];
  public doughnutChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
