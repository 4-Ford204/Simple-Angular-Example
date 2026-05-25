import { Routes } from '@angular/router';
import { SandboxLayout } from '../../layouts/sandbox-layout/sandbox-layout';

export const SandboxRoutes: Routes = [
  {
    path: '',
    component: SandboxLayout,
    children: [
      { path: '', redirectTo: 'chart-sandbox', pathMatch: 'full' },
      {
        path: 'button-sandbox',
        loadComponent: () => import('./button-sandbox/button-sandbox').then((m) => m.ButtonSandbox),
      },
      {
        path: 'chart-sandbox',
        loadComponent: () => import('./chart-sandbox/chart-sandbox').then((m) => m.ChartSandbox),
      },
      {
        path: 'data',
        loadChildren: () => import('./data/data.routes').then((m) => m.DataRoutes),
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.routes').then((m) => m.FormRoutes),
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.routes').then((m) => m.MessagesRoutes),
      },
      {
        path: 'overlay',
        loadChildren: () => import('./overlay/overlay.routes').then((m) => m.OverlayRoutes),
      },
    ],
  },
];
