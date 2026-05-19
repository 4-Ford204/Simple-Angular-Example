import { Routes } from '@angular/router';

export const DataRoutes: Routes = [
  {
    path: 'timeline-sandbox',
    loadComponent: () =>
      import('./timeline-sandbox/timeline-sandbox').then((m) => m.TimelineSandbox),
  },
];
