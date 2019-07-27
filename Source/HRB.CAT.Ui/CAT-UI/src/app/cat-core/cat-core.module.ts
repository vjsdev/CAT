import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CatEnsureModuleLoadedOnceGuard } from './cat-ensure-module-loaded-once.guard';
import { CatFooterComponent } from './cat-footer/cat-footer.component';
import { CatNavbarComponent } from './cat-navbar/cat-navbar.component';
import { CatSidebarComponent } from './cat-sidebar/cat-sidebar.component';
import { CatAdminLayoutComponent } from './cat-layouts/cat-admin-layout/cat-admin-layout.component';
import { CatAdminLayoutModule } from './cat-layouts/cat-admin-layout/cat-admin-layout.module';
import { CatSharedModule } from '../cat-shared/cat-shared.module';

@NgModule({
  declarations: [CatFooterComponent, CatNavbarComponent, CatSidebarComponent, CatAdminLayoutComponent],
  imports: [HttpClientModule, CatSharedModule, CatAdminLayoutModule],
  exports: [HttpClientModule, CatAdminLayoutModule, CatFooterComponent, CatNavbarComponent, CatSidebarComponent],
  providers: [ ]
})
export class CatCoreModule extends CatEnsureModuleLoadedOnceGuard {
   // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
   constructor(@Optional() @SkipSelf() parentModule: CatCoreModule) {
    super(parentModule);
  }
}
