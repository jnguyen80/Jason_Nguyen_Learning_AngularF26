import { Routes } from '@angular/router';
import { MonkeyList } from './Components/monkey-list/monkey-list';
import { editGuard } from './shared/guard/guard-edit';

export const routes: Routes = [
  { path: '', redirectTo: '/monkeys', pathMatch: 'full' },
  { path: 'monkeys', component: MonkeyList },
  {
    path: 'monkeys/edit/:id',
    loadComponent: () => import('./Components/monkey-form/monkey-form').then((m) => m.MonkeyForm),
    canActivate: [editGuard],
  },
  {
    path: 'monkeys/:id',
    loadComponent: () =>
      import('./Components/monkey-detail/monkey-detail').then((m) => m.MonkeyDetail),
  },
  {
    path: 'saved',
    loadComponent: () => import('./Components/saved-list/saved-list').then((m) => m.SavedList),
  },
];
