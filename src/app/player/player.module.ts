import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerService } from './player.service';

@NgModule({
  imports: [CommonModule],
  providers: [PlayerService]
})
export class PlayerModule {
  constructor(@Optional() @SkipSelf() parentModule: PlayerModule) {
  }
}