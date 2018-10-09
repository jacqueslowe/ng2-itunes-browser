import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../itunes/itunes.service';
import { Book } from '../book/book.model';
import { PlayerService } from '../player/player.service';
import { SearchService } from '../search/search.service';
import { AppComponent } from '../app.component';
import { SpinnerService } from '../spinner/spinner.service';
import { ToastService } from '../toast/toast.service';

@Component({
    moduleId: module.id,
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

    books: Book[] = null;
    errorMessage = null;

    constructor(
        private appComponent: AppComponent,
        private itunesService: ItunesService,
        private searchService: SearchService,
        private spinnerService: SpinnerService,
        private toastService: ToastService) {

        this.searchService.getStream().subscribe(
            (val) => {
                console.log('BookListComponent.SearchService new Filter=', val);
                this.getBooks();
            },
            (err) => { console.log('BookListComponent.SearchService.error()', err); },
            () => { console.log('BookListComponent.SearchService.completed'); }
        );
    }
    ngOnInit() {
        this.searchService.setSearchType('movies');
    }

    getBooks() {
        console.log('BookListComponent.getBooks()=' + this.searchService.getSearchFilter());
        this.books = null;
        this.errorMessage = null;
        if (this.searchService.hasSearchFilter() === true) {
            const timeoutId = setTimeout(() => {
                this.itunesService.getBooks(
                    this.searchService.getSearch()
                ).subscribe(
                    books => { this.processSucessResponse(books); },
                    error => this.errorMessage = <any>error);
            }, 1500);
        }
    }
    processSucessResponse(books: Book[]) {
        this.books = books;
        this.spinnerService.hide();
        this.toastService.success('iTunes returned " + this.books.length + " books!');
    }
}
