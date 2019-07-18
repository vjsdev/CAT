import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ratings' },
  { path: 'ratings', loadChildren: '../app/cat-ratings/cat-ratings.module#CatRatingsModule' },
  { path: 'observations', loadChildren: '../app/cat-observations/cat-observations.module#CatObservationsModule' },
  { path: 'comments', loadChildren: '../app/cat-comments/cat-comments.module#CatCommentsModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/ratings' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
