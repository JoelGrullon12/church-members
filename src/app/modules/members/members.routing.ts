import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberHomeComponent } from './pages/member-home/member-home.component';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';

const routes: Routes = [
  {
    path:'',
    component: MemberHomeComponent
  },
  {
    path:'detalle',
    component: MemberDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
