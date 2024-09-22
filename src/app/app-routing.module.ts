import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'miembros',
        loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule)
      },
      {
        path: 'diezmo',
        loadChildren: () => import('./modules/decimate/decimate.module').then(m => m.DecimateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
