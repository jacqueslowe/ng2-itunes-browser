import { Component } from '@angular/core';
import { ItunesService } from '../itunes/itunes.service';
import { SearchService } from '../search/search.service';
import { AppComponent } from '../app.component';
import { SpinnerService } from '../spinner/spinner.service';
import { ToastService } from '../toast/toast.service';

@Component({
    moduleId: module.id,
    selector: 'generic-list',
    templateUrl: './generic-list.component.html',
    styleUrls: ['./generic-list.component.css']
})

export class GenericListComponent {

    items: Object[] = null;
    errorMessage = null;

    constructor(
        private appComponent: AppComponent,
        private itunesService: ItunesService,
        private searchService: SearchService,
        private spinnerService: SpinnerService,
        private toastService: ToastService) {
        console.log("GenericListComponent.SearchService - ctor");
        this.searchService.getStream().subscribe(
            (val) => { this.getItems(); },
            (err) => { console.log("GenericListComponent.SearchService.error()", err) },
            () => { console.log("GenericListComponent.SearchService.complete") }
        );
    }

    getItems() {
        console.log("GenericListComponent.getItems()=" + this.searchService.getSearchFilter());
        this.items = null;
        this.errorMessage = null;
        if (this.searchService.hasSearchFilter() === true) {
            let timeoutId = setTimeout(() => {
                this.itunesService.getItems(
                    this.searchService.getSearch()
                ).subscribe(
                    items => { this.processSucessResponse(items); },
                    error => this.errorMessage = <any>error);
            }, 1500);
        }
    }

    processSucessResponse(items: Object[]) {
        this.items = items;
        this.spinnerService.hide();
        this.toastService.success("iTunes returned " + this.items.length + " movies!");
    }
}