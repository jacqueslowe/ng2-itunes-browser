import { Component} from '@angular/core';
import { Form } from '@angular/forms';
import { Track } from './track.model';
import { AppComponent } from '../app.component';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'track-add',
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
    track: any =  new Object();

    constructor( private toastService: ToastService, private router: Router,private spinnerService: SpinnerService, )
    {
    }
/*

artistId: 60960
artistName:"Boston"
artistViewUrl : "https://itunes.apple.com/us/artist/boston/id60960?uo=4"
artworkUrl30 : "http://is3.mzstatic.com/image/thumb/Music1/v4/76/b6/4c/76b64c7e-8580-4e22-8a07-f0e538e05d7c/source/30x30bb.jpg"
artworkUrl60 :"http://is3.mzstatic.com/image/thumb/Music1/v4/76/b6/4c/76b64c7e-8580-4e22-8a07-f0e538e05d7c/source/60x60bb.jpg"
artworkUrl100 :"http://is3.mzstatic.com/image/thumb/Music1/v4/76/b6/4c/76b64c7e-8580-4e22-8a07-f0e538e05d7c/source/100x100bb.jpg"
collectionCensoredName :"Boston"
collectionExplicitness : "notExplicit"
collectionId : 913902091
collectionName : "Boston"
collectionPrice :8.99
collectionViewUrl :"https://itunes.apple.com/us/album/more-than-a-feeling/id913902091?i=913902137&uo=4"
country:"USA"
currency:"USD"
discCount:1
discNumber
:1
isStreamable
:true
kind:"song"
previewUrl:"http://a1019.phobos.apple.com/us/r30/Music4/v4/15/6a/73/156a739b-cb63-76e9-5cd9-d18038802868/mzaf_4551798783871223267.plus.aac.p.m4a"
primaryGenreName:"Rock"
releaseDate:"1976-08-25T07:00:00Z"
trackCensoredName:"More Than a Feeling"
trackCount:8
trackExplicitness:"notExplicit"
trackId:913902137
trackName:"More Than a Feeling"
trackNumber:1
trackPrice:1.29
trackTimeMillis:285133
trackViewUrl:"https://itunes.apple.com/us/album/more-than-a-feeling/id913902091?i=913902137&uo=4"
wrapperType:"track"
*/

    saveTrack(formData: any)
    {
      this.spinnerService.show();
      let timeoutId = setTimeout(() => {  
          this.toastService.success(JSON.stringify(formData));
          this.router.navigateByUrl('/music');
          this.spinnerService.hide();
                        }, 1500);        

       
    }
}