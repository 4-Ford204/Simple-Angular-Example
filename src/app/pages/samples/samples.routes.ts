import { Routes } from '@angular/router';

export const SampleRoutes: Routes = [
  { path: '', redirectTo: 'resume-sample', pathMatch: 'full' },
  {
    path: 'letter-sample',
    loadComponent: () => import('./envelope-sample/envelope-sample').then((m) => m.EnvelopeSample),
  },
  {
    path: 'resume-sample',
    loadComponent: () => import('./resume-sample/resume-sample').then((m) => m.ResumeSample),
  },
];
