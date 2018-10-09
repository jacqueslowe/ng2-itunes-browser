import { NgModule } from '@angular/core';

import { MoviesListComponent } from './movies-list.component';
import { MoviesComponent } from './movies.component';
import { routedComponents } from './movies-routing.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  imports: [SearchModule],
  declarations: [MoviesComponent, MoviesListComponent, routedComponents]
})
export class MoviesModule { }
