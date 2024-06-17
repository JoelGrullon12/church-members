import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCheckboxListComponent } from './search-checkbox-list.component';

describe('SearchCheckboxListComponent', () => {
  let component: SearchCheckboxListComponent;
  let fixture: ComponentFixture<SearchCheckboxListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCheckboxListComponent]
    });
    fixture = TestBed.createComponent(SearchCheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
