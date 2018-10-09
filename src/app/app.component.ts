import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';
import { SearchService } from './search/search.service';
import { PlayerService } from './player/player.service';
import * as jQuery from 'jquery';

declare var module: {
  id: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private router: Router,
    private searchService: SearchService,
    private playerService: PlayerService
  ) {
    //  this.registerListeners();
  }

  ngOnInit() {
    this.router.navigateByUrl('/music/search');
  }

}

