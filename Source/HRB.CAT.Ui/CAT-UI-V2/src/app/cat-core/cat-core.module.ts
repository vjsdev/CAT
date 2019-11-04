import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CatEnsureModuleLoadedOnceGuard } from './cat-ensure-module-loaded-once.guard';
import { CatSharedModule } from '../cat-shared/cat-shared.module';
@NgModule({
  declarations: [],
  imports: [HttpClientModule, CatSharedModule],
  exports: [HttpClientModule],
  providers: [ ]
})
export class CatCoreModule extends CatEnsureModuleLoadedOnceGuard {
   // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
   constructor(@Optional() @SkipSelf() parentModule: CatCoreModule) {
    super(parentModule);
  }
}
