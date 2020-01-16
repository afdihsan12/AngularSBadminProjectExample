import { TestBed } from '@angular/core/testing';

import { LabratesserviceService } from './labratesservice.service';

describe('LabratesserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabratesserviceService = TestBed.get(LabratesserviceService);
    expect(service).toBeTruthy();
  });
});
