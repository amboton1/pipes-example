import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAmount'
})
export class FormatAmountPipe implements PipeTransform {
  transform(value: number | string): string {
    const amount = parseFloat(value as string);

    if (!isNaN(amount)) {
      return `$${amount.toFixed(2)}`;
    }

    return value.toString();
  }
}
