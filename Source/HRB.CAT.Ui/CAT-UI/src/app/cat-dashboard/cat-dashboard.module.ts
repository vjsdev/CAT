import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatDashboardRoutingModule } from './cat-dashboard-routing.module';
import { CatDashboardComponent } from './cat-dashboard.component';
import { CatSharedModule } from '../cat-shared/cat-shared.module';

@NgModule({
  declarations: [CatDashboardRoutingModule.component],
  imports: [ CatDashboardRoutingModule, CatSharedModule]
})
export class CatDashboardModule { }
