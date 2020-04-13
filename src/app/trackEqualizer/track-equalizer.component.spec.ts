import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTrackControllerComponent } from './track-equalizer.component';

describe('AppTrackControllerComponent', () => {
  let component: AppTrackControllerComponent;
  let fixture: ComponentFixture<AppTrackControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTrackControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTrackControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
