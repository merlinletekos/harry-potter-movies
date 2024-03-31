import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray',
  standalone: true
})
export class StringArrayPipe implements PipeTransform {

  /**
   * Transform a string array into string join by ', '
   * @param value string array to transform
   */
  transform(value: string[]): string {
    return value.join(', ');
  }

}
