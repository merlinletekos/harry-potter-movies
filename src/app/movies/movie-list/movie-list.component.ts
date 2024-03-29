import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieServiceService} from "../shared/movie-service.service";
import {tap} from "rxjs";
import {MinimalMovieData, MovieObject} from "../shared/movie.object";
import {MovieCardComponent} from "./movie-card/movie-card.component";
import {MovieFilterComponent} from "./movie-filter/movie-filter.component";

@Component({
  selector: 'hpm-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    MovieFilterComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit, OnDestroy{

  movieList!: Array<Pick<MovieObject, MinimalMovieData>>;

  constructor(private readonly movieService: MovieServiceService) {}

  ngOnInit() {
    this.movieService.getMoviesList()
      .pipe(
        tap((movies: Array<Pick<MovieObject, MinimalMovieData>>) => {
          this.movieList = movies;
        })
      )
      .subscribe()
  }

  ngOnDestroy() {
  }

}
