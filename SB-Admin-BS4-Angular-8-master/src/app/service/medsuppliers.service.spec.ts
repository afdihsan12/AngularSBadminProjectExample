import { TestBed } from '@angular/core/testing';

import { MedsuppliersService } from './medsuppliers.service';

describe('MedsuppliersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedsuppliersService = TestBed.get(MedsuppliersService);
    expect(service).toBeTruthy();
  });
});
