import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../itunes/itunes.service';
import { Movie } from '../movies/movie.model';
import { PlayerService } from '../player/player.service';
import { SearchService } from '../search/search.service';
import { SpinnerService } from '../spinner/spinner.service';
import { ToastService } from '../toast/toast.service';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {

    movies: Movie[] = null;
    errorMessage = null;

    constructor(
        private appComponent: AppComponent,
        private itunesService: ItunesService,
        private searchService: SearchService,
        private spinnerService: SpinnerService,
        private toastService: ToastService) {

        this.searchService.getStream().subscribe(
            (val) => { this.getMovies(); },
            (err) => { console.log('MoviesListComponent.SearchService.error()', err); },
            () => { console.log('MoviesListComponent.SearchService.complete'); }
        );
    }
    ngOnInit() {
        this.searchService.setSearchType('movies');
    }

    getMovies() {
        console.log('MoviesListComponent.getMovies()=' + this.searchService.getSearchFilter());
        this.spinnerService.show();
        this.movies = null;
        this.errorMessage = null;
        if (this.searchService.hasSearchFilter() === true) {
            const timeoutId = setTimeout(() => {
                this.itunesService.getMovies(
                    this.searchService.getSearch()
                ).subscribe(
                    movies => { this.processSucessResponse(movies); },
                    error => this.errorMessage = <any>error);
            }, 1500);
        }
    }

    processSucessResponse(movies: Movie[]) {
        this.movies = movies;
        this.spinnerService.hide();
        if (this.movies != null && this.movies.length > 0) {
            this.toastService.success('iTunes returned ' + this.movies.length + ' movies!');
        }
    }
}
