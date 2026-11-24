import { Component, OnDestroy, OnInit, computed, inject, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MonkeyService } from '../../services/monkey';
import { Highlight } from '../../directives/highlight';

@Component({
  imports: [RouterLink, TitleCasePipe, Highlight],
  selector: 'app-monkey-detail',
  styleUrl: './monkey-detail.css',
  templateUrl: './monkey-detail.html',
})
export class MonkeyDetail implements OnInit, OnDestroy {
  protected monkeyService = inject(MonkeyService);

  id = input.required<string>();

  protected monkey = computed(() => this.monkeyService.getMonkey(Number(this.id())));

  private openedAt = 0;
  private name = 'unknown monkey';

  // constructor() {
  //   console.log('[lifecycle] constructor id: ' + this.id());
  // }

  ngOnInit(): void {
    const monkey = this.monkeyService.getMonkey(Number(this.id()));

    if (monkey) {
      this.name = monkey.name;
    }

    this.openedAt = Date.now();
    console.log('[lifecycle] opened: ' + this.name);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    console.log('[lifecycle] closed: ' + this.name + ' after ' + seconds + ' seconds');
  }
}
