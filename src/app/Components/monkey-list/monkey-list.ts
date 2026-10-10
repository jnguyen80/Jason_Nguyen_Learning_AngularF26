import { Component, inject } from '@angular/core';
import { MonkeyListItem } from '../monkey-list-item/monkey-list-item';
import { MonkeyEvent } from '../../shared/models/monkey-event';
import { MonkeyService } from '../../services/monkey';

@Component({
  imports: [MonkeyListItem],
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

  protected onMonkeyEvent(event: MonkeyEvent) {
    console.log(event);
    if (event.action === 'removed') {
      this.monkeyService.removeMonkey(event.id);
    }
  }

  private nextId = 7;
  protected addMonkey() {
    this.monkeyService.addMonkey({
      id: this.nextId++,
      name: 'Rocket',
      species: 'Common',
      monkeyType: 'Chimpanzee',
      hasCoolTricks: true,
    });
  }
}
