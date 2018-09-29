import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Constants } from './constants';
import { AppComponent } from './app.component';
import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';
import { ItunesModule } from './itunes/itunes.module';

import { PlayerModule } from './player/player.module';
import { SearchModule } from './search/search.module';
import { MusicComponent }      from './music/music.component';
import { TrackAddComponent }      from './music/track-add.component';
import { TrackDetailsComponent }      from './music/track-details.component';

import { MusicSearchComponent }      from './music/music-search.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MusicNavigatorComponent } from './music/music-navigator.component';

import { BookComponent } from './book/book.component';
import { GenericComponent } from './generic/generic.component';
import { MusicListComponent } from './music/music-list.component';
import { BookListComponent } from './book/book-list.component';
import { GenericListComponent } from './generic/generic-list.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavBarComponent } from './nav-bar.component';
import { ToastService } from './toast/toast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts/ng2-charts';

const appRoutes: Routes = [
  { path: '', redirectTo: '/music', pathMatch: 'full' },
  { path: 'music', component: MusicComponent },
  { path: 'music/add', component: TrackAddComponent },
  { path: 'music/search', component: MusicSearchComponent },
  { path: 'music/details', component: TrackDetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'books', component: BookComponent },
  { path: 'all', component: GenericComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent,
    MusicComponent,  MusicListComponent, MusicSearchComponent, TrackAddComponent, TrackDetailsComponent,MusicNavigatorComponent,
    MoviesComponent, MoviesListComponent, 
    BookComponent, BookListComponent, 
    GenericComponent, GenericListComponent,NavBarComponent],
  imports: [ 
    RouterModule.forRoot(appRoutes), ChartsModule,
    BrowserAnimationsModule,
    BrowserModule, FormsModule, HttpModule, 
    SpinnerModule, ItunesModule, ToastModule, PlayerModule, SearchModule],
  exports: [
    SpinnerModule, ItunesModule, ToastModule, PlayerModule, SearchModule],
  providers: [Constants,ToastService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
