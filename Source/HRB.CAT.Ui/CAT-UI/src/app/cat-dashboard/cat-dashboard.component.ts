import { Component, OnInit } from '@angular/core';
import {apiData} from '../cat-api/cat-api-constants'
import * as Chartist from 'chartist';

@Component({
  selector: 'cat-dashboard',
  templateUrl: './cat-dashboard.component.html',
  styleUrls: ['./cat-dashboard.component.css']
})
export class CatDashboardComponent implements OnInit {
  audits = apiData.AUDIT;
  progress = apiData.PROGRESS;

  constructor() { }
  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};

  ngOnInit() {
  //   const dataDailySalesChart: any = {
  //     labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  //     series: [
  //         [20, 52, 30, 46, 20, 83, 83, 2, 46, 0, 86, 100]
  //     ]
  //   };
  // const optionsDailySalesChart: any = {
  //   lineSmooth: Chartist.Interpolation.cardinal({
  //       tension: 0
  //   }),
  //   low: 0,
  //   high: 110, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
  //   chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  // }

  // var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  // this.startAnimationForLineChart(dailySalesChart);
  }
  doAction(event) {
  }

}
