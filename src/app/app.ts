import { Component } from '@angular/core';
import { Monkey } from './shared/models/monkey';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected title = 'Monkeys from Planet of the Apes';

  protected monkeyList: Monkey[] = [
    { id: 1, name: 'Caesar', species: 'Bonobo', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 2, name: 'Maurice', species: 'Bornean', monkeyType: 'Orangutan', hasCoolTricks: true },
    { id: 3, name: 'Buck', species: 'Western lowland', monkeyType: 'Gorilla', hasCoolTricks: false },
    { id: 4, name: 'Baba', species: 'Olive', monkeyType: 'Baboon'},
    { id: 5, name: 'Cornelia', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 6, name: 'Blue Eyes', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
  ];
}
