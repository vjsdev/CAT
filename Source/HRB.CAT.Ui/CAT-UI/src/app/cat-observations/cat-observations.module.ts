import { NgModule } from '@angular/core';
import { CatObservationsRoutingModule } from './cat-observations-routing.module';
import { CatSharedModule } from '../cat-shared/cat-shared.module';

@NgModule({
  declarations: [CatObservationsRoutingModule.component],
  imports: [CatObservationsRoutingModule, CatSharedModule]
})
export class CatObservationsModule { }
