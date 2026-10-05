import { Component, input, output } from '@angular/core';
import { Monkey } from '../../shared/models/monkey';
import {MonkeyEvent} from '../../shared/models/monkey-event';

@Component({
  imports: [],
  selector: 'app-monkey-list-item',
  styleUrl: './monkey-list-item.css',
  templateUrl: './monkey-list-item.html',
})
export class MonkeyListItem {
  monkey = input.required<Monkey>();
  monkeyEvent = output<MonkeyEvent>();

  open() {
    this.monkeyEvent.emit({ id: this.monkey().id, action: 'opened' });
  }

  favourite() {
    this.monkeyEvent.emit({ id: this.monkey().id, action: 'favourited' });
  }

  remove() {
    this.monkeyEvent.emit({ id: this.monkey().id, action: 'removed' });
  }
}
