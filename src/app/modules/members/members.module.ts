import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberHomeComponent } from './pages/member-home/member-home.component';
import { MembersRoutingModule } from './members.routing';
import { SearchSidebarComponent } from './components/search-sidebar/search-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberInfoCardComponent } from './components/member-info-card/member-info-card.component';
import { SearchCheckboxListComponent } from './components/search-checkbox-list/search-checkbox-list.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';



@NgModule({
  declarations: [
    MemberHomeComponent,
    SearchSidebarComponent,
    MemberInfoCardComponent,
    SearchCheckboxListComponent,
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FontAwesomeModule,
    NgbAccordionModule
  ],
})
export class MembersModule { }
