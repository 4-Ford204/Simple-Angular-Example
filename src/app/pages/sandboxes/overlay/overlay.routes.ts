import { Routes } from '@angular/router';

export const OverlayRoutes: Routes = [
  {
    path: 'tooltip-sandbox',
    loadComponent: () => import('./tooltip-sandbox/tooltip-sandbox').then((m) => m.TooltipSandbox),
  },
];
