import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    switch (value) {
      case 'Critically Endangered':
        return 'Extreme risk';
      case 'Endangered':
        return 'High risk';
      case 'Vulnerable':
        return 'Moderate risk';
      case 'Near Threatened':
        return 'Low risk';
      case 'Least Concern':
        return 'Safe';
      default:
        return value;
    }
  }
}
