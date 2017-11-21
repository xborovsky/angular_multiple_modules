import { Shared2Component } from './../shared2/shared2.component';
import { Shared1Component } from './../shared1/shared1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Shared1Component,
    Shared2Component
  ],
  exports : [
    Shared1Component,
    Shared2Component
  ]
})
export class SharedModule { }
