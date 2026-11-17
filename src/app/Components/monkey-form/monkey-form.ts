import { Component, ElementRef, afterNextRender, computed, effect, inject, input, viewChild, } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Monkey } from '../../shared/models/monkey';
import { MonkeyService } from '../../services/monkey';
import {
  noWhitespaceValidator,
  nameNotFamilyValidator,
} from '../../shared/validator/monkey-validator';

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

  // Finds the element marked #firstField in the template.
  private firstField = viewChild<ElementRef<HTMLInputElement>>('firstField');

  protected isEditMode = computed(() => this.id() !== undefined);

  protected monkeyForm = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
      family: ['', Validators.required],
      region: ['', Validators.required],
      status: ['Least Concern' as Monkey['status']],
      hasCoolTricks: [false],
    },
    { validators: nameNotFamilyValidator },
  );

  constructor() {
    // afterNextRender waits until Angular has created the form on the page, the input exists when focus() is called.
    // ngOnInit runs before the form is created, so the input isn't available yet.
    afterNextRender(() => {
      this.firstField()?.nativeElement.focus();
    });

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
