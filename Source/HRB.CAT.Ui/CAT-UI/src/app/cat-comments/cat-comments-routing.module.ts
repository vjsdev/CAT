import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatCommentsComponent } from './cat-comments.component';

const routes: Routes = [
  {path: '', component: CatCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatCommentsRoutingModule {
  static component = [CatCommentsComponent];
}
