import { TestBed } from '@angular/core/testing';

import { TrackControllerGuard } from './track-controller.guard';

describe('TrackControllerGuard', () => {
  let guard: TrackControllerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TrackControllerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
