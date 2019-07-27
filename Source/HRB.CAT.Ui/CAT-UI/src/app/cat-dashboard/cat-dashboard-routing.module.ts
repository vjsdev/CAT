import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatDashboardComponent } from './cat-dashboard.component';
import { CatRatingsComponent } from './cat-ratings/cat-ratings.component';
import { CatObservationsComponent } from './cat-observations/cat-observations.component';
import { CatCommentsComponent } from './cat-comments/cat-comments.component';

const routes: Routes = [
  {path: '', component: CatDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatDashboardRoutingModule {
  static component = [CatDashboardComponent, CatRatingsComponent, CatObservationsComponent,
    CatCommentsComponent];
 }
