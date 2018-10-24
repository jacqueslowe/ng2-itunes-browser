import { Component, Input } from '@angular/core';
import { ItunesService } from '../itunes/itunes.service';
import { Track } from '../models/track.model';
import { PlayerService } from '../player/player.service';
import { SearchService } from '../search/search.service';
import { SpinnerService } from '../spinner/spinner.service';
import { ToastService } from '../toast/toast.service';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'app-music-list',
    templateUrl: './music-list.component.html',
    styleUrls: ['./music-list.component.css']
})

export class MusicListComponent {

    musicTracks: Track[] = null;
    errorMessage = null;
    @Input() searchParameter;

    constructor(
        private appComponent: AppComponent,
        private itunesService: ItunesService,
        private playerService: PlayerService,
        private searchService: SearchService,
        private spinnerService: SpinnerService,
        private toastService: ToastService
    ) {
        this.searchService.getStream().subscribe(
            (val) => { this.getMusic(); },
            (err) => { console.log('MusicListComponent.SearchService.error', err); },
            () => { console.log('MusicListComponent.SearchService.complete'); }
        );

        this.playerService.getStream().subscribe(
            (val) => { this.playerStateChanged(); },
            (err) => { console.log('MusicListComponent.playerService..subscribe.error', err); },
            () => { console.log('MusicListComponent.playerService..subscribe.complete'); }
        );
    }

    playerStateChanged() {
        if (this.playerService.playerState === 'ended') {
            this.nextTrack();
        }
    }
    nextTrack() {
        for (let i = 0; i < this.musicTracks.length; ++i) {
            if (this.musicTracks[i].trackId === this.playerService.selectedTrack.trackId) {
                this.playerService.play(this.musicTracks[(i < this.musicTracks.length - 1) ? ++i : 0]);
            }
        }
    }
    getMusic() {
        this.spinnerService.show();
        this.musicTracks = null;
        this.errorMessage = null;

        if (this.searchService.hasSearchFilter() === true) {
            const timeoutId = setTimeout(() => {
                this.itunesService.getMusic(
                    this.searchService.getSearch()
                ).subscribe(
                    music => { this.processSucessResponse(music); },
                    error => this.errorMessage = <any>error);
            }, 1500);
        }
    }
    processSucessResponse(music: Track[]) {
        this.musicTracks = music;
        this.spinnerService.hide();
        this.toastService.success('iTunes returned ' + this.musicTracks.length + ' tracks!');
    }
}
