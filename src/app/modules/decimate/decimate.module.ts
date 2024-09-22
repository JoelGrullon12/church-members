import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimateListComponent } from './pages/decimate-list/decimate-list.component';
import { AddTitheComponent } from './pages/add-tithe/add-tithe.component';
import { DecimateRoutingModule } from './decimate.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DecimateListComponent,
    AddTitheComponent
  ],
  imports: [
    CommonModule,
    DecimateRoutingModule,
    FontAwesomeModule
  ]
})
export class DecimateModule { }
