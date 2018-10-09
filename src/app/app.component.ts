import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';
//app
import { SearchService } from './search/search.service';
import { PlayerService } from './player/player.service';
import * as jQuery from 'jquery';

declare var module: {
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//TODO: added routes: Music, Movies, Podcasts, then add specifics: [searches, filters, and players]
export class AppComponent {

  constructor(private router: Router,
    private searchService: SearchService, //provides a mechanism for entering/validating and latching search criteria
    private playerService: PlayerService  //given a music track, plays/pause current track, need to be Observable
  ) {
    //  this.registerListeners();
  }

  ngOnInit() {
    this.router.navigateByUrl('/music/search');
  }

}

