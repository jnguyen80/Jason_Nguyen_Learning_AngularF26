import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'ask()',
  },
})
export class Confirm {
  // The question to ask
  question = input('Are you sure?', { alias: 'appConfirm' });

  // Fires only when the user says yes
  confirmed = output<void>();

  ask(): void {
    // An attribute with no value gives an empty string, so fall back to the default question
    if (confirm(this.question() || 'Are you sure?')) {
      this.confirmed.emit();
    }
  }
}
