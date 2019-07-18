import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatRatingsComponent } from './cat-ratings.component';

const routes: Routes = [
  {path: '', component: CatRatingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRatingsRoutingModule {
  static component = [CatRatingsComponent];
 }
