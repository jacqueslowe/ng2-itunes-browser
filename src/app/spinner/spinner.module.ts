import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent }   from './spinner.component';
import { SpinnerService }   from './spinner.service';

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [SpinnerService]
})
export class SpinnerModule {
  constructor( @Optional() @SkipSelf() parentModule: SpinnerModule) {
  }
}