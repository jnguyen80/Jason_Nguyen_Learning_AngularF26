import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.length > 0 && value.trim().length === 0) {
    return { whitespace: true };
  }
  return null;
}

export function nameNotFamilyValidator(group: AbstractControl): ValidationErrors | null {
  const name = group.get('name')?.value;
  const family = group.get('family')?.value;

  if (name && family && name.trim().toLowerCase() === family.trim().toLowerCase()) {
    return { nameMatchesFamily: true };
  }
  return null;
}
