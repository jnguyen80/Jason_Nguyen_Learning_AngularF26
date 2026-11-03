import { Component, computed, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Monkey } from '../../shared/models/monkey'
import { MonkeyService } from '../../services/monkey';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-monkey-form',
  styleUrl: './monkey-form.css',
  templateUrl: './monkey-form.html',
})
export class MonkeyForm {
  private fb = inject(FormBuilder);
  private monkeyService = inject(MonkeyService);

  protected monkeyForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    species: ['', Validators.required],
    monkeyType: ['Chimpanzee' as Monkey['monkeyType']],
    hasCoolTricks: [false],
  });

  protected onSubmit(): void {
    if (this.monkeyForm.invalid) {
      return;
    }

    // getRawValue() includes disabled controls too. value would skip them.
    const formValue = this.monkeyForm.getRawValue();
    const id = this.monkeyService.nextId();

    this.monkeyService.addMonkey({ id, ...formValue });
    this.monkeyForm.reset();
  }
}
