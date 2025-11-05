import { Routes } from '@angular/router';

export const SampleRoutes: Routes = [
  { path: '', redirectTo: 'letter-sample', pathMatch: 'full' },
  {
    path: 'letter-sample',
    loadComponent: () => import('./letter-sample/letter-sample').then((m) => m.LetterSample),
  },
];
