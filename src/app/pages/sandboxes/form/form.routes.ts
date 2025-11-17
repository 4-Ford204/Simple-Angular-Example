import { Routes } from '@angular/router';

export const FormRoutes: Routes = [
  {
    path: 'checkbox-sandbox',
    loadComponent: () =>
      import('./checkbox-sandbox/checkbox-sandbox').then((m) => m.CheckboxSandbox),
  },
];
