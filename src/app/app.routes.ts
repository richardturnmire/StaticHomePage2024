import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('@app/landingzone/landingzone.component').then(
        (mod) => mod.LandingzoneComponent,
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('@app/favorites/favorites.component').then(
        (mod) => mod.FavoritesComponent,
      ),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('@app/features/features.component').then(
        (mod) => mod.FeaturesComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('@app/contact/contact.component').then(
        (mod) => mod.ContactComponent,
      ),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
