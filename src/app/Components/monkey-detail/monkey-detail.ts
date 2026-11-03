import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MonkeyService } from '../../services/monkey';

@Component({
  imports: [RouterLink],
  selector: 'app-monkey-detail',
  styleUrl: './monkey-detail.css',
  templateUrl: './monkey-detail.html',
})
export class MonkeyDetail {
  protected monkeyService = inject(MonkeyService);

  id = input.required<string>();

  protected monkey = computed(() => this.monkeyService.getMonkey(Number(this.id())));
}
