import { NgModule } from '@angular/core';
import { CatRatingsRoutingModule } from './cat-ratings-routing.module';
import { CatSharedModule } from '../cat-shared/cat-shared.module';

@NgModule({
  declarations: [ CatRatingsRoutingModule.component ],
  imports: [ CatRatingsRoutingModule, CatSharedModule  ]
})
export class CatRatingsModule { }
