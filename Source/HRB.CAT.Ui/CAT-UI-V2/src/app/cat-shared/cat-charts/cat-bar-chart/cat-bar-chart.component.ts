import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-bar-chart',
  templateUrl: './cat-bar-chart.component.html',
  styleUrls: ['./cat-bar-chart.component.css']
})
export class CatBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  };
  public barChartLabels = ['90-100', '80-90', '70-80', '60-70', '60-50', 'under 50'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [2, 3, 2, 6, 3, 3], label: 'Rating Distribution', backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 99, 132, 0.2)'
  ],
  borderWidth: 1}
  ];
  constructor() { }

  ngOnInit() {
  }

}
