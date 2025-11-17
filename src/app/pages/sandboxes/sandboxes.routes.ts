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
        path: 'form',
        loadChildren: () => import('./form/form.routes').then((m) => m.FormRoutes),
      },
      {
        path: 'overlay',
        loadChildren: () => import('./overlay/overlay.routes').then((m) => m.OverlayRoutes),
      },
      {
        path: 'Media',
        loadChildren: () => import('./media/media.routes').then((m) => m.MediaRoutes),
      },
    ],
  },
];
