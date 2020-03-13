import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  HOME_URL='http://localhost:3000/';
  movie: Observable<Movie[]>;

  constructor(private http: HttpClient) { }

  addMovies(movie) {
    debugger
    const url = this.HOME_URL + 'movies';
    return this.http.post(url, movie)

  }

  getMovies(): Observable<Movie[]> {
    this.movie = this.http.get<Movie[]>(this.HOME_URL + 'movies');
    return this.movie;

  }

  updateMovies(movie) {
    const url = this.HOME_URL + 'movies/' + movie.id;
    return this.http.put(url, movie)
  }
  deleteMovies(movie) {
    const url = this.HOME_URL + 'movie/' + movie.id;
    return this.http.delete(url)
  }
}
