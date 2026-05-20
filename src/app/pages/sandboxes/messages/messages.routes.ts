import { Route } from '@angular/router';

export const MessagesRoutes: Route[] = [
  {
    path: 'message-sandbox',
    loadComponent: () => import('./message-sandbox/message-sandbox').then((m) => m.MessageSandbox),
  },
  {
    path: 'toast-sandbox',
    loadComponent: () => import('./toast-sandbox/toast-sandbox').then((m) => m.ToastSandbox),
  },
];
