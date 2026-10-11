import { Injectable, signal, computed} from '@angular/core';
import { Monkey } from '../shared/models/monkey';

@Injectable()
export class MockMonkeyService {
  private readonly monkeys = signal<Monkey[]>([
    { id: 1, name: 'John', species: 'Mix', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 2, name: 'Mary', species: 'Mix', monkeyType: 'Orangutan', hasCoolTricks: false },
    { id: 3, name: 'Doe', species: 'Mix', monkeyType: 'Gorilla' },
  ]);

  monkeyList = this.monkeys.asReadonly();

  readonly apiBaseUrl = 'https://mock.example.com/api';

  trickMonkeys = computed(() => this.monkeys().filter((monkey) => monkey.hasCoolTricks === true));

  trickSummary = computed(() => `${this.trickMonkeys().length} monkeys have cool tricks`);

  unknownTrickMonkeys = computed(() =>
    this.monkeys().filter((monkey) => monkey.hasCoolTricks === undefined),
  );

  unknownTrickCount = computed(
    () => this.monkeys().filter((monkey) => monkey.hasCoolTricks === undefined).length,
  );

  addMonkey(newMonkey: Monkey): void {
    this.monkeys.update((list) => [...list, newMonkey]);
  }

  removeMonkey(id: number): void {
    this.monkeys.update((list) => list.filter((monkey) => monkey.id !== id));
  }
}
