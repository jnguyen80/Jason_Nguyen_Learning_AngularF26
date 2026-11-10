import { Component, inject } from '@angular/core';
import { MonkeyListItem } from '../monkey-list-item/monkey-list-item';
import { MonkeyEvent } from '../../shared/models/monkey-event';
import { MonkeyService } from '../../services/monkey';
import { MonkeyForm} from '../monkey-form/monkey-form';

@Component({
  imports: [MonkeyListItem, MonkeyForm],
  selector: 'app-monkey-list',
  styleUrl: './monkey-list.css',
  templateUrl: './monkey-list.html',
})
export class MonkeyList {
  private monkeyService = inject(MonkeyService);

  protected monkeys = this.monkeyService.monkeyList;

  protected trickMonkeys = this.monkeyService.trickMonkeys;

  protected trickSummary = this.monkeyService.trickSummary;

  protected apiBaseUrl = this.monkeyService.apiBaseUrl;

  protected unknownTrickCount = this.monkeyService.unknownTrickCount;

  protected unknownTrickMonkeys = this.monkeyService.unknownTrickMonkeys;

  protected isLoading = this.monkeyService.isLoading;

  protected error = this.monkeyService.error;

  protected onMonkeyEvent(event: MonkeyEvent) {
    console.log(event);
    if (event.action === 'removed') {
      this.monkeyService.removeMonkey(event.id);
    }
  }

  protected addMonkey() {
    this.monkeyService.addMonkey({
      id: this.monkeyService.nextId(),
      name: 'Rocket',
      family: 'Mixed',
      region: 'Unknown',
      status: 'Least Concern',
      hasCoolTricks: true,
    });
  }
}
