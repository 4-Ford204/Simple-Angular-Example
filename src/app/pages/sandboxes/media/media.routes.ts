import { Routes } from '@angular/router';

export const MediaRoutes: Routes = [
  {
    path: 'image-sandbox',
    loadComponent: () => import('./image-sandbox/image-sandbox').then((m) => m.ImageSandbox),
  },
];
