import { Service, signal } from '@angular/core'

@Service()
export class ErrorService {
  message = signal<string | null>(null);

  set(text: string): void {
    this.message.set(text);
  }

  clear(): void {
    this.message.set(null);
  }
}
