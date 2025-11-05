import { Home } from './home/home';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { Routes } from '@angular/router';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      {
        path: 'sandbox',
        loadChildren: () => import('./sandboxes/sandboxes.routes').then((m) => m.SandboxRoutes),
      },
    ],
  },
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.routes').then((m) => m.SampleRoutes),
  },
];
