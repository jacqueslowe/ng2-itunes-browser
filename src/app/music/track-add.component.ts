import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Track } from './track.model';
import { AppComponent } from '../app.component';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-track-add',
  templateUrl: './track-add.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
    em {color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
  `]
})

export class TrackAddComponent {
  track: any = new Object();

  constructor(private toastService: ToastService, private router: Router, private spinnerService: SpinnerService, ) {
  }

  saveTrack(formData: any) {
    this.spinnerService.show();
    const timeoutId = setTimeout(() => {
      this.toastService.success(JSON.stringify(formData));
      this.router.navigateByUrl('/music');
      this.spinnerService.hide();
    }, 1500);
  }
}
