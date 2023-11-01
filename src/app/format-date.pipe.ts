import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const dateParts = value.split('-');
    if (dateParts.length === 3) {
      const year = dateParts[2];
      const month = this.getMonthName(Number(dateParts[0]) - 1);
      const day = dateParts[1];

      return `${month} ${day}, ${year}`;
    }

    return value;
  }

  private getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months[monthIndex] || '';
  }

}
