import {Component, EventEmitter, Output} from '@angular/core';
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
export class MovieFilterComponent {

  @Output() titleFilterEmitter = new EventEmitter<string>();
  @Output() releaseYearFilterEmitter = new EventEmitter<string>();

  titleFilter!: string;
  releaseYearFilter!: number;

  /**
   * Emit the new value to the parent component
   * @param value string the new value from the title input
   */
  updateTitleFilter(value: string): void {
    this.titleFilterEmitter.emit(value);
  }

  /**
   * Emit the new value to the parent component
   * @param value number the new value from the release year input
   */
  updateReleaseYearFilter(value: number | null): void {
    let valueEmit = '';
    if (value !== null) {
      valueEmit = value.toString();
    }
    this.releaseYearFilterEmitter.emit(valueEmit);
  }
}
