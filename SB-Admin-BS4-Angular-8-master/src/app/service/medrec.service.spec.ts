import { TestBed } from '@angular/core/testing';

import { MedrecService } from './medrec.service';

describe('MedrecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedrecService = TestBed.get(MedrecService);
    expect(service).toBeTruthy();
  });
});
