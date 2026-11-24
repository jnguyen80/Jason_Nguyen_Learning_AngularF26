import { Component, computed, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MonkeyService } from '../../services/monkey';
import { SavedService } from '../../services/saved';

@Component({
  imports: [RouterLink, TitleCasePipe],
  selector: 'app-saved-list',
  styleUrl: './saved-list.css',
  templateUrl: './saved-list.html',
})
export class SavedList {
  private monkeyService = inject(MonkeyService);
  private saved = inject(SavedService);

  protected savedMonkeys = computed(() =>
    this.monkeyService.monkeyList().filter((monkey) => this.saved.savedIds().includes(monkey.id)),
  );
}
