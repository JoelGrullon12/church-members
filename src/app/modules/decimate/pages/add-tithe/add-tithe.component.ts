import { Component } from '@angular/core';
import { faMagnifyingGlass, faPen, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-tithe',
  templateUrl: './add-tithe.component.html',
  styleUrls: ['./add-tithe.component.css']
})
export class AddTitheComponent {
  public searchIcon=faMagnifyingGlass
  public deleteIcon=faX
  public editIcon=faPen
}
