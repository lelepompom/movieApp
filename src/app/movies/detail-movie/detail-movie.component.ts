import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService,
  ) { }

  ngOnInit() {
    const title = this.route.snapshot.url[1].path;
    this.movieService.GetMovie(title).subscribe(
      (movie: Movie) => {
        this.movie = movie;
      },
      err => this.router.navigate(['movies'])
    );
  }

}
