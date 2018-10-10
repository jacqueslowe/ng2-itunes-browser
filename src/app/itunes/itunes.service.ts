import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Constants } from '../constants';
import { Search } from '../search/search.model';
import { Track } from '../models/track.model';
import { Movie } from '../models/movie.model';
import { Book } from '../models/book.model';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ItunesService {
    /*
    media: song, movie, podcast, song, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
    */
    searchTerm = '?term=';
    searchMediaType = '&entity=';
    searchLimit = '&limit=25';

    constructor(private httpClient: HttpClient, private constants: Constants) { }

    getItems(search: Search): Observable<any> {

        const requestURL: string = this.constants.itunesUrl +
            this.searchTerm + search.searchChoice +
            this.searchLimit;

        console.log('ItunesService.getItems(): ' + requestURL);
        return this.httpClient.get<any>(requestURL)
            .map(data => data.results);
    }

    getBooks(search: Search): Observable<any> {

        const requestURL: string = this.constants.itunesUrl +
            this.searchTerm + search.searchChoice +
            this.searchLimit + '&media=ebook';

        console.log('ItunesService.getBooks(): ' + requestURL);
        return this.httpClient.get<any>(requestURL)
            .map(data => data.results);
    }

    getMovies(search: Search): Observable<Movie[]> {

        const requestURL: string = this.constants.itunesUrl +
            this.searchTerm + search.searchChoice +
            this.searchLimit +
            this.searchMediaType + 'movie';

        console.log('ItunesService.getMovies(): ' + requestURL);
        return this.httpClient.get<any>(requestURL)
            .map(data => {
                return data.results.map(item => {
                    return new Movie(
                        item.trackId,
                        item.artistName,
                        item.trackName,
                        item.longDescription,
                        item.artworkUrl30,
                        item.artworkUrl100,
                        item.previewUrl);
                });
            });
    }

    getMusic(search: Search): Observable<Track[]> {

        const requestURL: string = this.constants.itunesUrl +
            this.searchTerm +
            search.searchChoice +
            this.searchLimit +
            this.searchMediaType + 'song';

        return this.httpClient.get<any>(requestURL)
            .map(data => {
                return data.results.map(item => {
                    return new Track(
                        item.trackId,
                        item.kind,
                        item.artistName,
                        item.trackName,
                        item.genre,
                        item.artworkUrl30,
                        item.artworkUrl100,
                        item.previewUrl);
                });
            });

    }
}
