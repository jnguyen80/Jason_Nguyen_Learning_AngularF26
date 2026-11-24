import { Service, effect, signal } from '@angular/core';

const STORAGE_KEY = 'monkeys.saved';

@Service()
export class SavedService {
  private ids = signal<number[]>(this.read());

  savedIds = this.ids.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.ids()));
      } catch {
      }
    });
  }

  toggle(id: number): void {
    this.ids.update((list) =>
      list.includes(id) ? list.filter((saved) => saved !== id) : [...list, id],
    );
  }

  isSaved(id: number): boolean {
    return this.ids().includes(id);
  }

  private read(): number[] {
    try {
      const text = localStorage.getItem(STORAGE_KEY);
      if (text === null) {
        return [];
      }
      const data = JSON.parse(text);
      return Array.isArray(data) ? data.filter((item) => typeof item === 'number') : [];
    } catch {
      return [];
    }
  }
}
