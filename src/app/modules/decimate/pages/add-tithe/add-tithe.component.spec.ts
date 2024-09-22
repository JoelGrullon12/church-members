import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitheComponent } from './add-tithe.component';

describe('AddTitheComponent', () => {
  let component: AddTitheComponent;
  let fixture: ComponentFixture<AddTitheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTitheComponent]
    });
    fixture = TestBed.createComponent(AddTitheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
