import { TestBed } from '@angular/core/testing';

import { DetailbillService } from './detailbill.service';

describe('DetailbillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailbillService = TestBed.get(DetailbillService);
    expect(service).toBeTruthy();
  });
});
