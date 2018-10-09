import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'music-search',
  templateUrl: './music-search.component.html'
})

export class MusicSearchComponent {
  constructor(private router: Router) { }
}
