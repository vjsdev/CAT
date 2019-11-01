import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { CatProjectlistComponent } from './cat-projectlist/cat-projectlist.component';
import { CatDoughnutChartComponent } from './cat-charts/cat-doughnut-chart/cat-doughnut-chart.component';
import { CatBarChartComponent } from './cat-charts/cat-bar-chart/cat-bar-chart.component';
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, ChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule, RouterModule , FormsModule, ReactiveFormsModule, ChartsModule,
    CatProjectlistComponent, CatDoughnutChartComponent, CatBarChartComponent
  ],
  declarations: [ CatProjectlistComponent, CatDoughnutChartComponent, CatBarChartComponent],
})
export class CatSharedModule { }
