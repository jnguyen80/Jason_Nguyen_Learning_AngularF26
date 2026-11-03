import { Component, computed, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Monkey } from '../../shared/models/monkey'
import { MonkeyService } from '../../services/monkey';
import { noWhitespaceValidator, nameNotSpeciesValidator } from '../../shared/validator/monkey-validator';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-monkey-form',
  styleUrl: './monkey-form.css',
  templateUrl: './monkey-form.html',
})
export class MonkeyForm {
  private fb = inject(FormBuilder);
  private monkeyService = inject(MonkeyService);
  private router = inject(Router);

  id = input<string>();

  protected isEditMode = computed(() => this.id() !== undefined);

  protected monkeyForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    species: ['', Validators.required],
    monkeyType: ['Chimpanzee' as Monkey['monkeyType']],
    hasCoolTricks: [false],
  },
    { validators: nameNotSpeciesValidator });

  constructor() {
    effect(() => {
      const id = this.id();
      if (id === undefined) {
        return;
      }
      const monkey = this.monkeyService.getMonkey(Number(id));
      if (monkey) {
        // patchValue() fills only the fields it is given. The form has no id field,
        // so the id is ignored here and added back on submit.
        this.monkeyForm.patchValue({ ...monkey, hasCoolTricks: monkey.hasCoolTricks ?? false });
      }
    });
  }

  protected onSubmit(): void {
    if (this.monkeyForm.invalid) {
      return;
    }

    // getRawValue() includes disabled controls too. value would skip them.
    const formValue = this.monkeyForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : this.monkeyService.nextId();

    if (this.isEditMode()) {
      this.monkeyService.updateMonkey({ id, ...formValue });
    } else {
      this.monkeyService.addMonkey({ id, ...formValue });
    }

    this.monkeyForm.reset();
    this.router.navigate(['/monkeys', id]);
  }
}
