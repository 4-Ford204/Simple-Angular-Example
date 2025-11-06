import { Routes } from '@angular/router';

export const SampleRoutes: Routes = [
  { path: '', redirectTo: 'letter-sample', pathMatch: 'full' },
  {
    path: 'letter-sample',
    loadComponent: () => import('./envelope-sample/envelope-sample').then((m) => m.EnvelopeSample),
  },
];
