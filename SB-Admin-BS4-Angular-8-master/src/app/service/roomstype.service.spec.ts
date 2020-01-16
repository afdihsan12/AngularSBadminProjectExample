import { TestBed } from '@angular/core/testing';

import { RoomstypeService } from './roomstype.service';

describe('RoomstypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomstypeService = TestBed.get(RoomstypeService);
    expect(service).toBeTruthy();
  });
});
