import { Routes } from '@angular/router';
import { SandboxLayout } from '../../layouts/sandbox-layout/sandbox-layout';

export const SandboxRoutes: Routes = [
  {
    path: '',
    component: SandboxLayout,
    children: [
      { path: '', redirectTo: 'button-sandbox', pathMatch: 'full' },
      {
        path: 'button-sandbox',
        loadComponent: () => import('./button-sandbox/button-sandbox').then((m) => m.ButtonSandbox),
      },
      {
        path: 'checkbox-sandbox',
        loadComponent: () =>
          import('./checkbox-sandbox/checkbox-sandbox').then((m) => m.CheckboxSandbox),
      },
      {
        path: 'tooltip-sandbox',
        loadComponent: () =>
          import('./tooltip-sandbox/tooltip-sandbox').then((m) => m.TooltipSandbox),
      },
    ],
  },
];
