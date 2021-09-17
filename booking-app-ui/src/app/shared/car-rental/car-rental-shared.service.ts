import { Injectable } from '@angular/core';
import { CarRental } from 'src/app/models/car-rental/car-rental';
import { CarRentalService } from 'src/app/services/car-rental-service/car-rental.service';

@Injectable({
  providedIn: 'root'
})
export class CarRentalSharedService {
  carRental : CarRental = new CarRental()

  constructor(private carRentalService : CarRentalService) { }

  setBookingData(data : CarRental) {
    this.carRental = data
  }

  getBookingData() : CarRental {
    return this.carRental
  }

  saveBooking() {
    // this.makeBookingService.createBooking(this.booking).subscribe(data => {
    //   console.log(data)
    // },
    // error => console.log(error)
    // )

    console.log(this.carRental)
  }
}
