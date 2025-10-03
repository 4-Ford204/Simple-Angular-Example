import { Routes } from '@angular/router';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { Home } from './home/home';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      {
        path: 'sandbox',
        loadChildren: () => import('./sandbox/sandbox.routes').then((m) => m.SandboxRoutes),
      },
    ],
  },
];
