import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Search } from './search.model';

@Injectable()
export class SearchService {

    private searchSubject: Subject<string>;
    private stream$: Observable<string>;
    private searchFilter: string = null;
    private searchType = null;

    constructor() {
        this.searchSubject = new Subject();
        this.stream$ = this.searchSubject.map(x => x);
    }

    getSearchFilter() { return this.searchFilter; }
    getSearchType() { return this.searchType; }
    getSearch() {
        let searchObject = new Search();
        searchObject.searchType = this.searchType;
        searchObject.searchChoice = this.searchFilter;
        return searchObject;
    }
    setSearchType(searchType: string) {
        this.searchType = searchType;
    }
    setSearchFilter(filter: string, searchType: string) {
        this.searchFilter = filter;
        this.searchType = searchType;
        this.searchChanged(this.searchFilter);
    }

    hasSearchFilter() { return (this.searchFilter != null && this.searchFilter.length > 0) ? true : false }

    getStream() {
        return this.stream$;
    }
    private searchChanged(newFilter: string) {
        this.searchSubject.next(newFilter);
    }
}