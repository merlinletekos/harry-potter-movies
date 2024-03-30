import {Component, Input} from '@angular/core';
import {MovieObject} from "../../shared/movie.object";
import {BudgetPipe} from "../../shared/pipe/budget.pipe";
import {DurationPipe} from "../../shared/pipe/duration.pipe";
import {StringArrayPipe} from "../../shared/pipe/string-array.pipe";

@Component({
  selector: 'hpm-movie-details',
  standalone: true,
  imports: [
    BudgetPipe,
    DurationPipe,
    StringArrayPipe
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  @Input() movie!: MovieObject;

}
