import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatObservationsComponent } from './cat-observations.component';

const routes: Routes = [
  {path: '', component: CatObservationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatObservationsRoutingModule {
  static component = [CatObservationsComponent];
 }
