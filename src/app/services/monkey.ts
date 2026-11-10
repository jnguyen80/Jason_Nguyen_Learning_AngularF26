import { Injectable, signal, computed, effect, inject} from '@angular/core';
import { Monkey } from '../shared/models/monkey';
import { APP_CONFIG } from '../shared/config/app-config';

@Injectable({ providedIn: 'root' })
export class MonkeyService {
  private config = inject(APP_CONFIG);

  private readonly monkeys = signal<Monkey[]>([
    // { id: 1, name: 'Caesar', species: 'Bonobo', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    // { id: 2, name: 'Maurice', species: 'Bornean', monkeyType: 'Orangutan', hasCoolTricks: true },
    // { id: 3, name: 'Buck', species: 'Western lowland', monkeyType: 'Gorilla', hasCoolTricks: false, },
    // { id: 4, name: 'Baba', species: 'Olive', monkeyType: 'Baboon' },
    // { id: 5, name: 'Cornelia', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    // { id: 6, name: 'Blue Eyes', species: 'Monkey', monkeyType: 'Chimpanzee', hasCoolTricks: true },
    { id: 54, name: "Verreaux's sifaka", family: 'Indriidae', region: 'Madagascar', status: 'Critically Endangered', },
    { id: 56, name: 'Aye-aye', family: 'Daubentoniidae', region: 'Madagascar', status: 'Endangered', },
    { id: 60, name: 'Potto', family: 'Lorisidae', region: 'Central Africa', status: 'Least Concern', hasCoolTricks: true, },
  ]);

  monkeyList = this.monkeys.asReadonly();

  readonly apiBaseUrl = this.config.apiBaseUrl;

  trickMonkeys = computed(() => this.monkeys().filter((monkey) => monkey.hasCoolTricks === true));

  trickSummary = computed(() => `${this.trickMonkeys().length} monkeys have cool tricks`);

  unknownTrickMonkeys = computed(() =>
    this.monkeys().filter((monkey) => monkey.hasCoolTricks === undefined),
  );

  unknownTrickCount = computed(
    () => this.monkeys().filter((monkey) => monkey.hasCoolTricks === undefined).length,
  );

  constructor() {
    effect(() => {
      console.log('Monkey count: ', this.monkeys().length);
    });
  }

  addMonkey(newMonkey: Monkey): void {
    this.monkeys.update((list) => [...list, newMonkey]);
  }

  updateMonkey(updated: Monkey): void {
    this.monkeys.update((list) =>
      list.map((monkey) => (monkey.id === updated.id ? updated : monkey)),
    );
  }

  removeMonkey(id: number): void {
    this.monkeys.update((list) => list.filter((monkey) => monkey.id !== id));
  }

  getMonkey(id: number): Monkey | undefined {
    return this.monkeys().find((monkey) => monkey.id === id);
  }

  private idCounter = 7;
  nextId(): number {
    return this.idCounter++;
  }
}
