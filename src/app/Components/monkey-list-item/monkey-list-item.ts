import { Component, input, output } from '@angular/core';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Monkey } from '../../shared/models/monkey';
import { MonkeyEvent } from '../../shared/models/monkey-event';
import { StatusLabelPipe } from '../../pipes/status-label-pipe';
import { Confirm } from '../../directives/confirm';
import { Highlight } from '../../directives/highlight';

@Component({
  imports: [RouterLink, TitleCasePipe, UpperCasePipe, StatusLabelPipe, Confirm],
  selector: 'app-monkey-list-item',
  styleUrl: './monkey-list-item.css',
  templateUrl: './monkey-list-item.html',
  hostDirectives: [
    {
      directive: Highlight,
      inputs: ['appHighlight: highlightColor'],
    },
  ],
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
