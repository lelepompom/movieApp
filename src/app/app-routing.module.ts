import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: ListMoviesComponent },
  { path: 'movies/:title', component: DetailMovieComponent },
  { path: '**', component: ListMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
