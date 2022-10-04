import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../screens/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'compass',
        loadChildren: () =>
          import('../screens/compass/compass.module').then(
            (m) => m.CompassPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabnav/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabnav/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
