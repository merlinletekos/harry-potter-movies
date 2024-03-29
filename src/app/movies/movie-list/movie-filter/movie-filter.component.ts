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

  @Output() titleFilterEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() releaseDateFilterEmitter: EventEmitter<string> = new EventEmitter<string>();

  titleFilter: string = '';
  releaseDateFilter: string = '';

  /**
   * Emit the new value to the parent component
   * @param value the new value from the title input
   */
  updateTitleFilter(value: string) {
    this.titleFilterEmitter.emit(value);
  }

  /**
   * Emit the new value to the parent component
   * @param value the new value from the release date input
   */
  updateReleaseDateFilter(value: string) {
    this.releaseDateFilterEmitter.emit(value);
  }
}
