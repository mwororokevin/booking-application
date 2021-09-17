import { TestBed } from '@angular/core/testing';

import { RentalVehiclesService } from './rental-vehicles.service';

describe('RentalVehiclesService', () => {
  let service: RentalVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
