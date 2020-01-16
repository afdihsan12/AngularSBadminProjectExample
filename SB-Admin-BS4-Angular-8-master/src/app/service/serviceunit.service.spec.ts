import { TestBed } from '@angular/core/testing';

import { ServiceunitService } from './serviceunit.service';

describe('ServiceunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceunitService = TestBed.get(ServiceunitService);
    expect(service).toBeTruthy();
  });
});
