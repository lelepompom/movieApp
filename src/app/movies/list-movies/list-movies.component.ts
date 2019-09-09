import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public movies: Movie[];

  constructor(
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.GetMovies().subscribe(data => this.movies = data);
  }

  public redirectDetail(movie: Movie): void {
    this.router.navigate(['movies', movie.title]);
  }

}
