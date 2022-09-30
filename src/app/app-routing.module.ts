import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./screens/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'tabnav',
    pathMatch: 'full',
  },
  {
    path: 'tabnav',
    loadChildren: () =>
      import('./tabnav/tabnav.module').then((m) => m.TabnavPageModule),
  },
  {
    path: 'compass',
    loadChildren: () => import('./screens/compass/compass.module').then( m => m.CompassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
