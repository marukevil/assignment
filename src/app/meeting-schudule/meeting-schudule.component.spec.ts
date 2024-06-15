import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSchuduleComponent } from './meeting-schudule.component';

describe('MeetingSchuduleComponent', () => {
  let component: MeetingSchuduleComponent;
  let fixture: ComponentFixture<MeetingSchuduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingSchuduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingSchuduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
