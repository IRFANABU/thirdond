import { TestBed } from '@angular/core/testing';

import { MobileBrandService } from './mobile-brand.service';

describe('MobileBrandService', () => {
  let service: MobileBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
