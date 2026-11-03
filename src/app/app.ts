import { Component } from '@angular/core';
import { Monkey } from './shared/models/monkey';
import { MonkeyList } from './Components/monkey-list/monkey-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [ RouterOutlet ]
})
export class App {
  protected title = 'Monkeys from Planet of the Apes';

}
