import { Component } from '@angular/core';
import { Monkey } from './shared/models/monkey';
import { MonkeyList } from './Components/monkey-list/monkey-list';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [ MonkeyList ]
})
export class App {
  protected title = 'Monkeys from Planet of the Apes';

}
