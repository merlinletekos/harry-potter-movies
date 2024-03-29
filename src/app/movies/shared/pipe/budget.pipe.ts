import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {

  /**
   * Transform string budget to : ${value} million
   * @param value value of the budget
   */
  transform(value: string | undefined): string {
    if (value) {
      return `$${value} million`;
    }
    return '-';
  }

}
