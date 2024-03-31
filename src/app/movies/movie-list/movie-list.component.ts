import {Component, OnInit} from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {MinimalMovieData, MovieObject} from "../shared/movie.object";
import {MovieCardComponent} from "./movie-card/movie-card.component";
import {MovieFilterComponent} from "./movie-filter/movie-filter.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'hpm-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    MovieFilterComponent,
    AsyncPipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  filterTitleQuery$ = new BehaviorSubject<string>('');
  filterReleaseYearQuery$ = new BehaviorSubject<string>('');

  movieList$!: Observable<Array<Pick<MovieObject, MinimalMovieData>>>;

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.movieList$ = combineLatest([
      this.filterTitleQuery$,
      this.filterReleaseYearQuery$,
      this.movieService.getMoviesList()
    ])
      .pipe(
        map(([
          filterTitleQuery,
          filterReleaseYearQuery,
          movie
        ]) => {
            return movie.filter((x: Pick<MovieObject, MinimalMovieData>) =>
              x.title.toLowerCase().includes(filterTitleQuery.toLowerCase()) &&
              this.isStringIncludeIntoDate(x.release_date, filterReleaseYearQuery))
        })
      )
  }

  /**
   * Update title filter with new value
   * @param value new value
   */
  filterMovieListByTitle(value: string): void {
    this.filterTitleQuery$.next(value);
  }

  /**
   * Update filter release year value
   * @param value new value
   */
  filterMovieListByReleaseYear(value: string): void {
    this.filterReleaseYearQuery$.next(value);
  }

  /**
   * Return a boolean value if the value is included into year
   * @param releaseDate Date to check
   * @param value value looking in the date
   * @private
   */
  private isStringIncludeIntoDate(releaseDate: Date, value: string): boolean {
    const date = new Date(releaseDate);
    console.log(date);
    return date.getFullYear().toString().includes(value);
  }

}
