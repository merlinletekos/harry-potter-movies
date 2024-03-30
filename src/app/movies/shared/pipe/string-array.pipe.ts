import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray',
  standalone: true
})
export class StringArrayPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(', ');
  }

}
