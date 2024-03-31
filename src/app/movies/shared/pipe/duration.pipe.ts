import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  /**
   * Transform number to duration in hours and minutes
   * @param value value to transform
   */
  transform(value: number | undefined): string {
    if (value) {
      const hours = Math.floor(value / 60);
      const minute = value % 60;
      return `${hours}h ${minute}min`;
    }
    return "-";
  }

}
