import { Component, Input } from '@angular/core';
import { Router, NavigationEnd, } from '@angular/router';
import { Constants } from '../constants';
import { PlayerService } from '../player/player.service';
import { SearchService } from './search.service';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    @Input()
    searchValue = 'unset';
    self = this;
    constructor(
        private appComponent: AppComponent,
        private constants: Constants,
        private playerService: PlayerService,
        private searchService: SearchService,
        private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.self.setDefaultSearchType();

            }
        });
    }

    setDefaultSearchType() {
        if (this.router.url.indexOf(this.constants.typeMusic) !== -1) {
            this.searchValue = this.constants.choiceMusic;
        } else if (this.router.url.indexOf(this.constants.typeMovie) !== -1) {
            this.searchValue = this.constants.choiceMovie;
        } else if (this.router.url.indexOf(this.constants.typeBook) !== -1) {
            this.searchValue = this.constants.choiceBook;
        } else if (this.router.url.indexOf('all') !== -1) {
            this.searchValue = this.constants.choiceGeneric;
        }
    }

    clearSearch() {
        this.searchValue = '';
        this.playerService.player.pause();
    }

    onKey(event: any) {
        this.searchValue = event.target.value;
    }

    searchClicked() {
        this.searchService.setSearchFilter(
            this.searchValue, 'music'
        );
        this.playerService.player.pause();
    }
}
