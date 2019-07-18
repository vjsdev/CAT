import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
  declarations: [ ],
})
export class CatSharedModule { }
