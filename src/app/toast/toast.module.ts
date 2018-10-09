import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastService } from './toast.service';

@NgModule({
  imports: [CommonModule],
  providers: [ToastService]
})
export class ToastModule {
  constructor(@Optional() @SkipSelf() parentModule: ToastModule) {
  }
}
