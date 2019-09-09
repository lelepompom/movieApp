import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../core/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = environment.baseUrl + environment.relativeUrl;

  constructor(private http: HttpClient) { }

  public GetMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url)
      .map(data => {
        const arrayMovies: Movie[] = new Array();
        data.forEach(value => {
          const movie: Movie = new Movie(value.title, value.year);
          arrayMovies.push(movie);
        });
        return arrayMovies;
      });
  }

  public GetMovie(name: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/${name}`)
      .map(data => {
        return new Movie(data.title, data.year);
      });
  }
}
