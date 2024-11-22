import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./nucleo/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./nucleo/inicio-sesion/inicio-sesion.page').then( m => m.InicioSesionPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./nucleo/registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'nothing',
    loadComponent: () => import('./nucleo/nothing/nothing.page').then( m => m.NothingPage)
  },
  {
    path: '',
    redirectTo: 'nucleo',
    pathMatch: 'full'
  },
  {
    path: 'encabezado',
    loadComponent: () => import('./shared/encabezado/encabezado.page').then( m => m.EncabezadoPage)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./nucleo/galeria/galeria.page').then( m => m.GaleriaPage)
  },
];
