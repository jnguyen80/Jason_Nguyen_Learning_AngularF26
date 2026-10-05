import { Service, signal, computed, effect } from '@angular/core';
import { Monkey } from '../shared/models/monkey';

@Service()
export class MonkeyService {
  private readonly monkeys = signal<Monkey[]>([
    { id: 1, name: 'Caesar', species: 'Bonobo', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 2, name: 'Maurice', species: 'Bornean', monkeyType: 'Orangutan', hasCoolTricks: true },
    {
      id: 3,
      name: 'Buck',
      species: 'Western lowland',
      monkeyType: 'Gorilla',
      hasCoolTricks: false,
    },
    { id: 4, name: 'Baba', species: 'Olive', monkeyType: 'Baboon' },
    { id: 5, name: 'Cornelia', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 6, name: 'Blue Eyes', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
  ]);

  monkeyList = this.monkeys.asReadonly();

  trickMonkeys = computed(() => this.monkeys().filter((m) => m.hasCoolTricks === true));

  constructor() {
    effect(() => {
      console.log('Monkey count: ', this.monkeys().length);
    });
  }

  addMonkey(newMonkey: Monkey): void {
    this.monkeys.update((list) => [...list, newMonkey]);
  }
}
