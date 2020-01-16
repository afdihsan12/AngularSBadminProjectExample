import { TestBed } from '@angular/core/testing';

import { EmptypeService } from './emptype.service';

describe('EmptypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmptypeService = TestBed.get(EmptypeService);
    expect(service).toBeTruthy();
  });
});
