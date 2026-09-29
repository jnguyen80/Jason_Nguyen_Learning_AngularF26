import { Component } from '@angular/core';
import { Monkey } from '../../shared/models/monkey';

@Component({
  imports: [],
  selector: 'app-monkey-list',
  styleUrl: './monkey-list.css',
  templateUrl: './monkey-list.html',
})
export class MonkeyList {
  monkeys: Monkey[] = [
    { id: 1, name: 'Caesar', species: 'Bonobo', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 2, name: 'Maurice', species: 'Bornean', monkeyType: 'Orangutan', hasCoolTricks: true },
    { id: 3, name: 'Buck', species: 'Western lowland', monkeyType: 'Gorilla', hasCoolTricks: false, },
    { id: 4, name: 'Baba', species: 'Olive', monkeyType: 'Baboon' },
    { id: 5, name: 'Cornelia', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 6, name: 'Blue Eyes', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
  ];
}
