import { NgModule } from '@angular/core';

import { CatCommentsRoutingModule } from './cat-comments-routing.module';
import { CatSharedModule } from '../cat-shared/cat-shared.module';

@NgModule({
  declarations: [CatCommentsRoutingModule.component],
  imports: [CatCommentsRoutingModule, CatSharedModule]
})
export class CatCommentsModule { }
