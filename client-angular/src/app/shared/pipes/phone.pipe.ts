import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})

export class PhonePipe implements PipeTransform {

  transform(value?: string): string {

    if (!value) {
      return '';
    }

    if (!value.includes('-')) {

      if (value.length === 9) {
        return `(${value.substring(0, 1)}) ${value.substring(3, 9)}`;

      } else {

        return `(${value.substring(0, 3)}) ${value.substring(4, 10)}`;
      }
    }
    const number = value.split('-');
    return `(${number[0]} ${number[1]})`;
  }
}
