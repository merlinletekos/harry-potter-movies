import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MinimalMovieData, MovieObject} from "./movie.object";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http: HttpClient) { }

  /**
   * Return all the movie from the API
   */
  getMoviesList(): Observable<Array<Pick<MovieObject, MinimalMovieData>>> {
    return this.http.get<Array<Pick<MovieObject, MinimalMovieData>>>('/movies');
  }

  /**
   * Return the movie corresponding to the id
   * @param movieId id of the movie wanted
   */
  getMovieById(movieId: string): Observable<MovieObject> {
    return this.http.get<MovieObject>(`/movies/${movieId}`);
  }
}
