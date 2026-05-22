import { Routes } from '@angular/router';

export const FormRoutes: Routes = [
  {
    path: 'checkbox-sandbox',
    loadComponent: () =>
      import('./checkbox-sandbox/checkbox-sandbox').then((m) => m.CheckboxSandbox),
  },
  {
    path: 'multi-select-sandbox',
    loadComponent: () =>
      import('./multi-select-sandbox/multi-select-sandbox').then((m) => m.MultiSelectSandbox),
  },
  {
    path: 'toggle-switch-sandbox',
    loadComponent: () =>
      import('./toggle-switch-sandbox/toggle-switch-sandbox').then((m) => m.ToggleSwitchSandbox),
  },
];
