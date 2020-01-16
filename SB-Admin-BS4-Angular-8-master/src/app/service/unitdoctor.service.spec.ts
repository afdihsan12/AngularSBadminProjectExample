import { TestBed } from '@angular/core/testing';

import { UnitdoctorService } from './unitdoctor.service';

describe('UnitdoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitdoctorService = TestBed.get(UnitdoctorService);
    expect(service).toBeTruthy();
  });
});
