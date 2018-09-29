import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItunesService }   from './itunes.service';

@NgModule({
  imports: [CommonModule],
  providers: [ItunesService]
})
export class ItunesModule {
  constructor( @Optional() @SkipSelf() parentModule: ItunesModule) {
  }
}