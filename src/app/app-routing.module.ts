import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'shared/components/error-404/error-404.component';

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
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
