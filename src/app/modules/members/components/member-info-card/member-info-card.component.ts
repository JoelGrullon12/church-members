import { Component } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-info-card',
  templateUrl: './member-info-card.component.html',
  styleUrls: ['./member-info-card.component.css']
})
export class MemberInfoCardComponent {
  public faEllipsis=faEllipsis
}
