import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecimateListComponent } from './pages/decimate-list/decimate-list.component';
import { AddTitheComponent } from './pages/add-tithe/add-tithe.component';
const routes: Routes = [
{
  path:'',
  component:DecimateListComponent
},
{
  path:'agregar-diezmo',
  component:AddTitheComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecimateRoutingModule { }
