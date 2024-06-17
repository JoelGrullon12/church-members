import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInfoCardComponent } from './member-info-card.component';

describe('MemberInfoCardComponent', () => {
  let component: MemberInfoCardComponent;
  let fixture: ComponentFixture<MemberInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberInfoCardComponent]
    });
    fixture = TestBed.createComponent(MemberInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
