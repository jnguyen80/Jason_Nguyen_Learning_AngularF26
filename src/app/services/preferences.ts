import { Service, effect, signal } from '@angular/core';

const STORAGE_KEY = 'monkeys.dark';

@Service()
export class PreferencesService {
  private darkMode = signal<boolean>(this.read());

  dark = this.darkMode.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.darkMode()));
      } catch {
        // storage is full or blocked, so the app keeps working without saving
      }
    });
  }

  toggleDark(): void {
    this.darkMode.update((on) => !on);
  }

  private read(): boolean {
    try {
      const text = localStorage.getItem(STORAGE_KEY);
      return text === null ? false : JSON.parse(text) === true;
    } catch {
      return false;
    }
  }
}
