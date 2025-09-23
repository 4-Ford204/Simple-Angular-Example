import { Routes } from '@angular/router';

import { PlaygroundLayout } from '../../layouts/playground-layout/playground-layout';

export const playgroundRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'button-demo',
        component: PlaygroundLayout,
        loadComponent: () =>
          import('./button-playground/button-playground').then((m) => m.ButtonPlayground),
      },
    ],
  },
];
