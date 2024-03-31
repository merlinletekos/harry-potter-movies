import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../shared/movie.service";
import {Subscription, tap} from "rxjs";
import {MovieObject} from "../shared/movie.object";
import {MovieSummaryComponent} from "./movie-summary/movie-summary.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {Location} from "@angular/common";

@Component({
  selector: 'hpm-movie',
  standalone: true,
  imports: [
    MovieSummaryComponent,
    MovieDetailsComponent
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  movieId: string = this.activatedRoute.snapshot.params['movieId'];
  movie!: MovieObject;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly movieService: MovieService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.movieService.getMovieById(this.movieId)
        .pipe(
          tap((movie) => {
            this.movie = movie;
          })
        )
        .subscribe()
    );
  }

  /**
   * Go on the previous page
   */
  public goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
