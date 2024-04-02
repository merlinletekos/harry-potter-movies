import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {

  /**
   * Transform budget to the string: ${value} million
   * @param value value of the budget
   */
  transform(value: string | number | undefined): string {
    if (value) {
      return `$${value} million`;
    }
    return '-';
  }

}
