import { Routes } from '@angular/router';

export const OverlayRoutes: Routes = [
  { path: '', redirectTo: 'tooltip-sandbox', pathMatch: 'full' },
  {
    path: 'tooltip-sandbox',
    loadComponent: () => import('./tooltip-sandbox/tooltip-sandbox').then((m) => m.TooltipSandbox),
  },
];
