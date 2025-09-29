import { Routes } from '@angular/router';
import { PlaygroundLayout } from '../../layouts/playground-layout/playground-layout';

export const playgroundRoutes: Routes = [
  {
    path: '',
    component: PlaygroundLayout,
    children: [
      { path: '', redirectTo: 'button-playground', pathMatch: 'full' },
      {
        path: 'button-playground',
        loadComponent: () =>
          import('./button-playground/button-playground').then((m) => m.ButtonPlayground),
      },
      {
        path: 'dropdown-list-playground',
        loadComponent: () =>
          import('./dropdown-list-playground/dropdown-list-playground').then(
            (m) => m.DropdownListPlayground,
          ),
      },
    ],
  },
];
