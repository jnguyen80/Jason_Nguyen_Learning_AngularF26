import { Service, signal, computed } from '@angular/core';

@Service()
export class LoadingService {
  private count = signal(0);

  isLoading = computed(() => this.count() > 0);

  increase(): void {
    this.count.update((current) => current + 1);
  }

  decrease(): void {
    this.count.update((current) => Math.max(0, current - 1));
  }
}
