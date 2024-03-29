import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'hpm-movie-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css'
})
export class MovieFilterComponent implements OnInit {

  @Output() titleFilterEmitter = new EventEmitter<string>();
  @Output() releaseYearFilterEmitter = new EventEmitter<string>();

  titleFilter!: string;
  releaseYearFilter!: number;

  ngOnInit() {
    console.log(this.releaseYearFilter);
  }

  /**
   * Emit the new value to the parent component
   * @param value string the new value from the title input
   */
  updateTitleFilter(value: string) {
    console.log(value);
    this.titleFilterEmitter.emit(value);
  }

  /**
   * Emit the new value to the parent component
   * @param value number the new value from the release year input
   */
  updateReleaseYearFilter(value: number | null) {
    let valueEmit = '';
    if (value !== null) {
      valueEmit = value.toString();
    }
    this.releaseYearFilterEmitter.emit(valueEmit);
  }
}
