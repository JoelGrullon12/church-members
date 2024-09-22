import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimateListComponent } from './decimate-list.component';

describe('DecimateListComponent', () => {
  let component: DecimateListComponent;
  let fixture: ComponentFixture<DecimateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecimateListComponent]
    });
    fixture = TestBed.createComponent(DecimateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
