import { TestBed } from '@angular/core/testing';

import { LabserviceService } from './labservice.service';

describe('LabserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabserviceService = TestBed.get(LabserviceService);
    expect(service).toBeTruthy();
  });
});
