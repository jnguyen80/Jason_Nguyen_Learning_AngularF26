import { Component, input } from '@angular/core';
import { Monkey } from '../../shared/models/monkey';

@Component({
  imports: [],
  selector: 'app-monkey-list-item',
  styleUrl: './monkey-list-item.css',
  templateUrl: './monkey-list-item.html',
})
export class MonkeyListItem {
  monkey = input.required<Monkey>();
}
