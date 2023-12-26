import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pipe-join',
    loadComponent: () => import('./pages/ac-join-pipe/ac-join-pipe.component'),
  },
];
