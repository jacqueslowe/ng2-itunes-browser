import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Constants } from '../constants';
import { Search } from '../search/search.model';
import { Track } from '../Music/track.model';
import { Movie } from '../movies/movie.model';
import { Book } from '../book/book.model';
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
        .map(data => {return data.results});
    }

    getBooks(search: Search): Observable<any> {

        const requestURL: string = this.constants.itunesUrl +
            this.searchTerm + search.searchChoice +
            this.searchLimit + '&media=ebook';

        console.log('ItunesService.getBooks(): ' + requestURL);
        return this.httpClient.get<any>(requestURL)
            .map(data => {return data.results});
    }

    getMovies(search: Search): Observable<any> {

        const requestURL: string = this.constants.itunesUrl +
            this.searchTerm + search.searchChoice +
            this.searchLimit +
            this.searchMediaType + 'movie';

        console.log('ItunesService.getMovies(): ' + requestURL);

        return this.httpClient.get<any>(requestURL)
            .map(data => {return data.results});
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
                    let track:Track = new Track(); 
                    track.trackName = item.trackName;
                    track.artistName = item.artistName;
                    track.artworkUrl30 = item.artworkUrl30;
                    track.artworkUrl100 = item.artworkUrl100;
                    track.trackId = item.trackId;
                    track.previewUrl = item.previewUrl;
                    return track;
            });
        });
    
    }
}
