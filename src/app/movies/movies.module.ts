import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './movies.service';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListMoviesComponent,
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListMoviesComponent,
    DetailMovieComponent
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
