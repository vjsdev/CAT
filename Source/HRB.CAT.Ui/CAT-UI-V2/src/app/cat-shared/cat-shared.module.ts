import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule, RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule, RouterModule , FormsModule, ReactiveFormsModule,
  ],
  declarations: [ ],
})
export class CatSharedModule { }
