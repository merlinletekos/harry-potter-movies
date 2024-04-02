import {Component, Input} from '@angular/core';
import {MovieObject} from "../../shared/movie.object";

@Component({
  selector: 'hpm-movie-summary',
  standalone: true,
  imports: [],
  templateUrl: './movie-summary.component.html',
  styleUrl: './movie-summary.component.css'
})
export class MovieSummaryComponent {

  @Input() movie!: MovieObject;

}
