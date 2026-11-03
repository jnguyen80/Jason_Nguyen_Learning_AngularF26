import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.length > 0 && value.trim().length === 0) {
    return { whitespace: true };
  }
  return null;
}

export function nameNotSpeciesValidator(group: AbstractControl): ValidationErrors | null {
  const name = group.get('name')?.value;
  const species = group.get('species')?.value;

  if (name && species && name.trim().toLowerCase() === species.trim().toLowerCase()) {
    return { nameMatchesSpecies: true };
  }
  return null;
}
