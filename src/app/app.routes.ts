import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'regiones',
    loadComponent: () => import('./catalogos/regiones/regiones.page').then( m => m.RegionesPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./catalogos/productos/productos.page').then( m => m.ProductosPage)
  },
];
