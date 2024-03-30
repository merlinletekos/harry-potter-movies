import {Component, Input} from '@angular/core';
import {MinimalMovieData, MovieObject} from "../../shared/movie.object";
import {DatePipe} from "@angular/common";
import {BudgetPipe} from "../../shared/pipe/budget.pipe";
import {DurationPipe} from "../../shared/pipe/duration.pipe";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'hpm-movie-card',
  standalone: true,
  imports: [
    DatePipe,
    BudgetPipe,
    DurationPipe,
    RouterLink
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  @Input() movie!: Pick<MovieObject, MinimalMovieData>;

  constructor(private readonly router: Router) {}

  goDetail(id: string | undefined): void {
    this.router.navigate(['movie', id]);
  }

}
