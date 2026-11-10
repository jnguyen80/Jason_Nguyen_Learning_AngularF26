import { Component, inject } from '@angular/core';
import { Monkey } from './shared/models/monkey';
import { MonkeyList } from './Components/monkey-list/monkey-list';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { ErrorService } from './services/error';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [ RouterOutlet, Navbar ]
})
export class App {
  protected title = 'Monkeys from Planet of the Apes';
  protected errors = inject(ErrorService);
}
