import { Routes } from '@angular/router';
import { MonkeyList } from './Components/monkey-list/monkey-list';
import { MonkeyDetail } from './Components/monkey-detail/monkey-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/monkeys', pathMatch: 'full'},
  { path: 'monkeys', component: MonkeyList},
  { path: 'monkeys/:id', component: MonkeyDetail},
];
