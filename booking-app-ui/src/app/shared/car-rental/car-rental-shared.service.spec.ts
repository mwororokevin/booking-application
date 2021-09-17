import { TestBed } from '@angular/core/testing';

import { CarRentalSharedService } from './car-rental-shared.service';

describe('CarRentalSharedService', () => {
  let service: CarRentalSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRentalSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
