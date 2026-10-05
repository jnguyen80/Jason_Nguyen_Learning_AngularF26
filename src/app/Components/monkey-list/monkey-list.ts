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

  protected monkeys = this.monkeyService.monkeyList

  protected onMonkeyEvent(event: MonkeyEvent) {
    console.log(event);
  }
}
