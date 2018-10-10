
import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Track } from '../models/track.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
    em {color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
  `]
})

export class TrackDetailsComponent {
  track: any = new Object();
  constructor() {
  }
}
