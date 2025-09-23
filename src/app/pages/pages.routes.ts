import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.routes').then((m) => m.playgroundRoutes),
  },
];
