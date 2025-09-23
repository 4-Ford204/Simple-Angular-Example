import { Routes } from '@angular/router';

import { MainLayout } from '../layouts/main-layout/main-layout';
import { Home } from './home/home';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      {
        path: 'playground',
        loadChildren: () =>
          import('./playground/playground.routes').then((m) => m.playgroundRoutes),
      },
    ],
  },
];
