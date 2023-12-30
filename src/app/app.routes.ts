import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pipe-join',
    loadComponent: () => import('./pages/ac-join-pipe/ac-join-pipe.component'),
  },
  {
    path: 'spinner',
    loadComponent: () => import('./pages/ac-spinner/ac-spinner.component'),
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/ac-toast/ac-toast.component'),
  },
  {
    path: '**',
    redirectTo: 'pipe-join',
  },
];
