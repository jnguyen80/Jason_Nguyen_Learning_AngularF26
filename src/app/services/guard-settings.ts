import { Service, signal } from '@angular/core';

@Service()
export class GuardSettings {
  guardEnabled = signal(true);

  toggle(): void {
    this.guardEnabled.update((enabled) => !enabled);
  }
}
