import { Routes } from '@angular/router';
import { MonkeyList } from './Components/monkey-list/monkey-list';
import { MonkeyDetail } from './Components/monkey-detail/monkey-detail';
import { MonkeyForm } from './Components/monkey-form/monkey-form';
import { editGuard } from './shared/guard/guard-edit';

export const routes: Routes = [
  { path: '', redirectTo: '/monkeys', pathMatch: 'full'},
  { path: 'monkeys', component: MonkeyList},
  { path: 'monkeys/edit/:id', component: MonkeyForm, canActivate: [editGuard] },
  { path: 'monkeys/:id', component: MonkeyDetail},
];
