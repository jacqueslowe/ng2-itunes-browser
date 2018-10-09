import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [CommonModule],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {
  constructor(@Optional() @SkipSelf() parentModule: SearchModule) {
  }
}
