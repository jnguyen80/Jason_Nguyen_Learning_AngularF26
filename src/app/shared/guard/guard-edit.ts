import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardSettings } from '../../services/guard-settings';

export const editGuard: CanActivateFn = () => {
  if (inject(GuardSettings).guardEnabled()) {
    return inject(Router).parseUrl('/monkeys');
  }
  return true;
}
